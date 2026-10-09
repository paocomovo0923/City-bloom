export interface CheatExecutionResult {
  success: boolean;
  message: string;
  effect?: 'money' | 'cash' | 'freerealestate' | 'moveobjects' | 'maxmotives' | 'level' | 'addsim' | 'clear' | 'help' | 'stats';
  value?: any;
}

export interface CheatCommandInfo {
  command: string;
  syntax: string;
  description: string;
  category: 'Dinheiro' | 'Construção' | 'Sims' | 'Geral';
}

export const CHEAT_LIST: CheatCommandInfo[] = [
  {
    command: 'motherlode',
    syntax: 'motherlode',
    description: 'Adiciona §50.000 Simoleons aos fundos da família.',
    category: 'Dinheiro',
  },
  {
    command: 'rosebud',
    syntax: 'rosebud',
    description: 'Adiciona §1.000 Simoleons aos fundos da família.',
    category: 'Dinheiro',
  },
  {
    command: 'kaching',
    syntax: 'kaching',
    description: 'Adiciona §1.000 Simoleons aos fundos da família.',
    category: 'Dinheiro',
  },
  {
    command: 'money',
    syntax: 'money <quantia>',
    description: 'Define a quantia exata de Simoleons (ex: money 999999).',
    category: 'Dinheiro',
  },
  {
    command: 'cash',
    syntax: 'cash <quantia>',
    description: 'Adiciona ou define Notas Verdes / Pontos de Estilo de Vida (LP).',
    category: 'Dinheiro',
  },
  {
    command: 'freerealestate',
    syntax: 'freerealestate <on|off>',
    description: 'Torna todas as construções, cômodos, paredes e móveis 100% gratuitos (§0).',
    category: 'Construção',
  },
  {
    command: 'bb.moveobjects',
    syntax: 'bb.moveobjects <on|off>',
    description: 'Permite mover e colocar móveis e decorações em qualquer lugar sem restrições de colisão.',
    category: 'Construção',
  },
  {
    command: 'maxmotives',
    syntax: 'maxmotives',
    description: 'Preenche todas as necessidades (Fome, Energia, Higiene, etc.) de todos os Sims da casa.',
    category: 'Sims',
  },
  {
    command: 'level',
    syntax: 'level <número>',
    description: 'Altera o nível do jogador (ex: level 99).',
    category: 'Geral',
  },
  {
    command: 'addsim',
    syntax: 'addsim [nome]',
    description: 'Adiciona um novo Sim à família da casa.',
    category: 'Sims',
  },
  {
    command: 'stats',
    syntax: 'stats',
    description: 'Exibe estatísticas do lote, fundos atuais e cheats ativos.',
    category: 'Geral',
  },
  {
    command: 'clear',
    syntax: 'clear / cls',
    description: 'Limpa o histórico de mensagens da tela do console.',
    category: 'Geral',
  },
  {
    command: 'help',
    syntax: 'help / cheats / ajuda',
    description: 'Exibe a lista de todos os cheats disponíveis.',
    category: 'Geral',
  },
];

export function executeCheatCommand(
  rawInput: string,
  currentContext: {
    coins: number;
    cash: number;
    playerLevel: number;
    freeRealEstate: boolean;
    moveObjects: boolean;
    simsCount: number;
    floorCount: number;
  }
): CheatExecutionResult {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { success: false, message: '' };
  }

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toLowerCase();
  const arg1 = parts[1]?.toLowerCase();
  const argNum = parseInt(parts[1], 10);

  // 1. MOTHERLODE
  if (command === 'motherlode') {
    return {
      success: true,
      message: 'motherlode: +§50.000 Simoleons adicionados com sucesso!',
      effect: 'money',
      value: { mode: 'add', amount: 50000 },
    };
  }

  // 2. ROSEBUD / KACHING
  if (command === 'rosebud' || command === 'kaching') {
    return {
      success: true,
      message: `${command}: +§1.000 Simoleons adicionados aos seus fundos!`,
      effect: 'money',
      value: { mode: 'add', amount: 1000 },
    };
  }

  // 3. MONEY <amount>
  if (command === 'money') {
    if (isNaN(argNum) || argNum < 0) {
      return {
        success: false,
        message: 'Uso incorreto. Exemplo: money 50000 (define os Simoleons para 50.000).',
      };
    }
    return {
      success: true,
      message: `money: Fundos definidos exatamente para §${argNum.toLocaleString('pt-BR')} Simoleons!`,
      effect: 'money',
      value: { mode: 'set', amount: argNum },
    };
  }

  // 4. CASH <amount> or LP <amount>
  if (command === 'cash' || command === 'lp' || command === 'sp') {
    const amount = isNaN(argNum) ? 500 : Math.max(0, argNum);
    return {
      success: true,
      message: `${command.toUpperCase()}: +${amount} Notas / Pontos adicionados!`,
      effect: 'cash',
      value: { mode: 'add', amount },
    };
  }

  // 5. FREEREALESTATE [on|off]
  if (command === 'freerealestate' || command === 'freerealestate.toggle') {
    let newState = !currentContext.freeRealEstate;
    if (arg1 === 'on' || arg1 === 'true' || arg1 === '1') newState = true;
    if (arg1 === 'off' || arg1 === 'false' || arg1 === '0') newState = false;

    return {
      success: true,
      message: `FreeRealEstate está agora ${newState ? 'ATIVADO (Construções e móveis custam §0)' : 'DESATIVADO (Custos normais)'}.`,
      effect: 'freerealestate',
      value: newState,
    };
  }

  // 6. BB.MOVEOBJECTS [on|off] / MOVEOBJECTS [on|off]
  if (
    command === 'bb.moveobjects' ||
    command === 'moveobjects' ||
    command === 'move_objects' ||
    command === 'bb.moveobjects.on'
  ) {
    let newState = !currentContext.moveObjects;
    if (arg1 === 'on' || arg1 === 'true' || arg1 === '1') newState = true;
    if (arg1 === 'off' || arg1 === 'false' || arg1 === '0') newState = false;

    return {
      success: true,
      message: `bb.moveobjects está agora ${newState ? 'ATIVADO (Coloque móveis onde quiser sem colisões)' : 'DESATIVADO (Modo de colisão padrão)'}.`,
      effect: 'moveobjects',
      value: newState,
    };
  }

  // 7. MAXMOTIVES / FILLNEEDS
  if (
    command === 'maxmotives' ||
    command === 'fillneeds' ||
    command === 'satisfy' ||
    command === 'needs'
  ) {
    return {
      success: true,
      message: 'maxmotives: Todas as necessidades de todos os Sims foram 100% preenchidas! Humor: Radiante/Feliz.',
      effect: 'maxmotives',
    };
  }

  // 8. LEVEL <number>
  if (command === 'level') {
    if (isNaN(argNum) || argNum <= 0) {
      return {
        success: false,
        message: 'Uso incorreto. Exemplo: level 50 ou level 99.',
      };
    }
    return {
      success: true,
      message: `Nível do jogador alterado para o nível ${argNum}!`,
      effect: 'level',
      value: argNum,
    };
  }

  // 9. UNLOCKALL / BB.IGNOREGAMEPLAYUNLOCKSENTITLEMENT
  if (
    command === 'unlockall' ||
    command === 'bb.ignoregameplayunlocksentitlement' ||
    command === 'unlock'
  ) {
    return {
      success: true,
      message: 'Itens desbloqueados e nível máximo garantido!',
      effect: 'level',
      value: 99,
    };
  }

  // 10. ADDSIM
  if (command === 'addsim' || command === 'sims.add') {
    const simName = parts.slice(1).join(' ') || `Novo Sim ${currentContext.simsCount + 1}`;
    return {
      success: true,
      message: `Sim "${simName}" adicionado à família!`,
      effect: 'addsim',
      value: simName,
    };
  }

  // 11. STATS
  if (command === 'stats' || command === 'info') {
    return {
      success: true,
      message: `[ESTATÍSTICAS DO LOTE]
• Simoleons: §${currentContext.coins.toLocaleString('pt-BR')}
• Notas/Cash: ${currentContext.cash}
• Nível: ${currentContext.playerLevel}
• Andares: ${currentContext.floorCount}
• Sims na Casa: ${currentContext.simsCount}
• FreeRealEstate: ${currentContext.freeRealEstate ? 'ON (Ativo)' : 'OFF'}
• MoveObjects (bb.moveobjects): ${currentContext.moveObjects ? 'ON (Ativo)' : 'OFF'}`,
      effect: 'stats',
    };
  }

  // 12. CLEAR / CLS
  if (command === 'clear' || command === 'cls') {
    return {
      success: true,
      message: '',
      effect: 'clear',
    };
  }

  // 13. HELP / CHEATS / AJUDA
  if (command === 'help' || command === 'cheats' || command === 'ajuda' || command === '?') {
    const helpLines = CHEAT_LIST.map((c) => `• ${c.syntax.padEnd(20, ' ')} : ${c.description}`).join('\n');
    return {
      success: true,
      message: `=== CHEATS DISPONÍVEIS THE SIMS ===\n${helpLines}\n\nDica: Clique em qualquer atalho rápido para executar imediatamente!`,
      effect: 'help',
    };
  }

  // UNKNOWN COMMAND
  return {
    success: false,
    message: `Comando desconhecido: "${trimmed}". Digite "help" ou "cheats" para ver a lista de comandos disponíveis.`,
  };
}
