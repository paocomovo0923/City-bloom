import { MoodInfo, NeedKey, Needs, Posture, SimAnim, SkillId, TraitDef, TraitId } from './simTypes';

export interface InteractionDef {
  id: string;
  label: string;
  icon: string;
  /** Need gain per game minute while the interaction runs. */
  gains: Partial<Record<NeedKey, number>>;
  duration: number;
  posture: Posture;
  anim: SimAnim;
  approach: 'front' | 'side' | 'on';
  emote: string;
  coins?: number;
  skill?: SkillId;
}

const SLEEP: InteractionDef = { id: 'sleep', label: 'Dormir', icon: 'fa-bed', gains: { energy: 0.32, hygiene: -0.02 }, duration: 300, posture: 'lie', anim: 'idle', approach: 'side', emote: 'fa-moon' };
const NAP: InteractionDef = { id: 'nap', label: 'Cochilar', icon: 'fa-couch', gains: { energy: 0.25 }, duration: 60, posture: 'lie', anim: 'idle', approach: 'side', emote: 'fa-moon' };
const RELAX: InteractionDef = { id: 'relax', label: 'Relaxar', icon: 'fa-mug-hot', gains: { energy: 0.08, fun: 0.25 }, duration: 40, posture: 'sit', anim: 'idle', approach: 'front', emote: 'fa-mug-hot' };

export const OBJECT_INTERACTIONS: Record<string, InteractionDef[]> = {
  bed: [SLEEP, { ...NAP, icon: 'fa-bed' }],
  bed_single: [SLEEP, { ...NAP, icon: 'fa-bed' }],
  bunk_bed: [SLEEP, { ...NAP, icon: 'fa-bed' }],
  sofa: [RELAX, NAP],
  sofa_corner: [RELAX, NAP],
  armchair: [RELAX],
  chair: [{ ...RELAX, id: 'sit', label: 'Sentar', icon: 'fa-chair', gains: { energy: 0.06, fun: 0.08 }, duration: 25 }],
  office_chair: [{ ...RELAX, id: 'sit', label: 'Sentar', icon: 'fa-chair', gains: { energy: 0.06 }, duration: 25 }],
  barstool: [{ ...RELAX, id: 'sit', label: 'Sentar', icon: 'fa-chair', gains: { energy: 0.05, social: 0.05 }, duration: 25 }],
  fridge: [
    { id: 'snack', label: 'Pegar Lanche', icon: 'fa-cookie-bite', gains: { hunger: 2.4 }, duration: 12, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-cookie-bite' },
    { id: 'meal', label: 'Preparar Refeição', icon: 'fa-bowl-food', gains: { hunger: 2.6, fun: 0.08 }, duration: 30, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-bowl-food', skill: 'culinaria' },
  ],
  stove: [{ id: 'cook', label: 'Cozinhar Banquete', icon: 'fa-fire-burner', gains: { hunger: 2.4, fun: 0.2 }, duration: 45, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-fire-burner', skill: 'culinaria' }],
  counter: [{ id: 'snack_counter', label: 'Fazer Sanduíche', icon: 'fa-burger', gains: { hunger: 2 }, duration: 18, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-burger', skill: 'culinaria' }],
  kitchen_island: [{ id: 'snack_island', label: 'Fazer Salada', icon: 'fa-leaf', gains: { hunger: 1.8, hygiene: 0.05 }, duration: 18, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-leaf', skill: 'culinaria' }],
  toilet: [{ id: 'pee', label: 'Usar Vaso', icon: 'fa-toilet', gains: { bladder: 9, hygiene: -0.3 }, duration: 10, posture: 'sit', anim: 'idle', approach: 'front', emote: 'fa-toilet' }],
  shower: [{ id: 'shower', label: 'Tomar Banho', icon: 'fa-shower', gains: { hygiene: 4.5, energy: 0.05 }, duration: 20, posture: 'stand', anim: 'idle', approach: 'on', emote: 'fa-shower' }],
  bath: [{ id: 'bath', label: 'Banho de Banheira', icon: 'fa-bath', gains: { hygiene: 2.8, fun: 0.6, energy: 0.1 }, duration: 35, posture: 'lie', anim: 'idle', approach: 'on', emote: 'fa-bath' }],
  sink_vanity: [{ id: 'wash', label: 'Lavar o Rosto', icon: 'fa-hand-sparkles', gains: { hygiene: 2 }, duration: 8, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-hand-sparkles' }],
  tv: [{ id: 'tv', label: 'Assistir TV', icon: 'fa-tv', gains: { fun: 1.1, energy: -0.02 }, duration: 45, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-tv' }],
  tv_wall: [{ id: 'tv', label: 'Assistir TV', icon: 'fa-tv', gains: { fun: 1.1 }, duration: 45, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-tv' }],
  computer: [
    { id: 'game', label: 'Jogar Videogame', icon: 'fa-gamepad', gains: { fun: 1.4, energy: -0.05 }, duration: 50, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-gamepad', skill: 'logica' },
    { id: 'freelance', label: 'Trabalho Freelance', icon: 'fa-laptop-code', gains: { fun: -0.25, energy: -0.08 }, duration: 60, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-laptop-code', coins: 180, skill: 'logica' },
  ],
  desk: [{ id: 'study', label: 'Estudar', icon: 'fa-book', gains: { fun: -0.05 }, duration: 40, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-book', skill: 'logica' }],
  bookshelf: [{ id: 'read', label: 'Ler Livro', icon: 'fa-book-open', gains: { fun: 0.8 }, duration: 40, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-book-open', skill: 'logica' }],
  guitar: [
    { id: 'guitar', label: 'Tocar Violão', icon: 'fa-guitar', gains: { fun: 1 }, duration: 40, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-music', skill: 'musica' },
    { id: 'gig', label: 'Tocar por Gorjetas', icon: 'fa-hand-holding-dollar', gains: { fun: 0.4, social: 0.3, energy: -0.08 }, duration: 50, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-music', coins: 120, skill: 'musica' },
  ],
  speaker: [{ id: 'dance', label: 'Dançar', icon: 'fa-music', gains: { fun: 1.6, energy: -0.18, hygiene: -0.1 }, duration: 30, posture: 'stand', anim: 'jump', approach: 'front', emote: 'fa-music', skill: 'fitness' }],
  plant: [{ id: 'water', label: 'Regar Planta', icon: 'fa-seedling', gains: { fun: 0.35 }, duration: 10, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-droplet', skill: 'jardinagem' }],
  plant_tree: [{ id: 'water', label: 'Regar Árvore', icon: 'fa-tree', gains: { fun: 0.35 }, duration: 12, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-droplet', skill: 'jardinagem' }],
  fireplace: [{ id: 'warm', label: 'Aquecer-se', icon: 'fa-fire', gains: { fun: 0.5, energy: 0.05 }, duration: 25, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-fire' }],
  cash_register: [{ id: 'cashier', label: 'Trabalhar no Caixa', icon: 'fa-cash-register', gains: { fun: -0.15, social: 0.25 }, duration: 60, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-cash-register', coins: 220, skill: 'carisma' }],
  display_case: [{ id: 'browse', label: 'Ver Vitrine', icon: 'fa-eye', gains: { fun: 0.6 }, duration: 15, posture: 'stand', anim: 'idle', approach: 'front', emote: 'fa-eye' }],
  rug: [{ id: 'workout', label: 'Fazer Exercício', icon: 'fa-dumbbell', gains: { fun: 0.3, energy: -0.25, hygiene: -0.2 }, duration: 30, posture: 'stand', anim: 'jump', approach: 'on', emote: 'fa-dumbbell', skill: 'fitness' }],
};

export interface SocialDef {
  id: string;
  label: string;
  icon: string;
  social: number;
  fun: number;
  relationship: number;
  duration: number;
  emote: string;
  minRelationship?: number;
}

export const SOCIAL_INTERACTIONS: SocialDef[] = [
  { id: 'chat', label: 'Conversar', icon: 'fa-comments', social: 1.6, fun: 0.2, relationship: 6, duration: 20, emote: 'fa-comment-dots' },
  { id: 'joke', label: 'Contar Piada', icon: 'fa-face-grin-squint', social: 1.2, fun: 0.9, relationship: 8, duration: 15, emote: 'fa-face-laugh-squint' },
  { id: 'compliment', label: 'Elogiar', icon: 'fa-star', social: 1.4, fun: 0.3, relationship: 10, duration: 12, emote: 'fa-star' },
  { id: 'hug', label: 'Abraçar', icon: 'fa-hand-holding-heart', social: 2, fun: 0.4, relationship: 12, duration: 10, emote: 'fa-heart', minRelationship: 25 },
  { id: 'flirt', label: 'Flertar', icon: 'fa-heart', social: 1.8, fun: 0.6, relationship: 14, duration: 14, emote: 'fa-heart', minRelationship: 45 },
];

export const TRAITS: TraitDef[] = [
  { id: 'ativo', label: 'Ativo', icon: 'fa-person-running', description: 'Ama se exercitar e dançar.', likes: ['dance', 'workout'], decay: { energy: 0.85 } },
  { id: 'criativo', label: 'Criativo', icon: 'fa-palette', description: 'Diverte-se com música e arte.', likes: ['guitar', 'gig', 'cook'] },
  { id: 'glutao', label: 'Glutão', icon: 'fa-pizza-slice', description: 'Fica com fome mais rápido.', likes: ['meal', 'cook', 'snack'], decay: { hunger: 1.35 } },
  { id: 'preguicoso', label: 'Preguiçoso', icon: 'fa-couch', description: 'Cansa rápido e adora sofá.', likes: ['relax', 'nap', 'tv'], decay: { energy: 1.3 } },
  { id: 'sociavel', label: 'Sociável', icon: 'fa-people-group', description: 'Precisa de gente por perto.', likes: ['chat', 'joke'], decay: { social: 1.4 } },
  { id: 'geek', label: 'Geek', icon: 'fa-robot', description: 'Computador é vida.', likes: ['game', 'read', 'study'], decay: { fun: 1.15 } },
  { id: 'limpinho', label: 'Limpinho', icon: 'fa-soap', description: 'Higiene impecável.', likes: ['shower', 'bath', 'wash'], decay: { hygiene: 1.25 } },
  { id: 'solitario', label: 'Solitário', icon: 'fa-user-secret', description: 'Prefere ficar sozinho.', likes: ['read', 'game'], decay: { social: 0.6 } },
];

export const TRAIT_MAP: Record<TraitId, TraitDef> = Object.fromEntries(TRAITS.map((t) => [t.id, t])) as Record<TraitId, TraitDef>;

/** Base decay per game minute. A full bar lasts roughly 12–24 game hours. */
export const BASE_DECAY: Record<NeedKey, number> = {
  hunger: 0.1,
  energy: 0.065,
  bladder: 0.14,
  hygiene: 0.06,
  fun: 0.09,
  social: 0.075,
};

export function getMood(needs: Needs): MoodInfo {
  const values = Object.values(needs);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const min = Math.min(...values);
  if (min < 12) return { id: 'triste', label: 'Desconfortável', color: '#e5484d' };
  if (min < 28 || avg < 40) return { id: 'tenso', label: 'Tenso', color: '#f5a524' };
  if (avg > 82 && min > 60) return { id: 'inspirado', label: 'Inspirado', color: '#22c55e' };
  if (avg > 62) return { id: 'feliz', label: 'Feliz', color: '#4ade80' };
  return { id: 'bem', label: 'Bem', color: '#a3e635' };
}

export function getInteractionsFor(type: string): InteractionDef[] {
  return OBJECT_INTERACTIONS[type] || [];
}

export function getInteraction(type: string, id: string): InteractionDef | undefined {
  return getInteractionsFor(type).find((i) => i.id === id);
}

export function relationshipLabel(value: number): string {
  if (value >= 80) return 'Melhores Amigos';
  if (value >= 55) return 'Bons Amigos';
  if (value >= 30) return 'Amigos';
  if (value >= 10) return 'Conhecidos';
  return 'Desconhecidos';
}
