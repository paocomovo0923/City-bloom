export type NeedKey = 'hunger' | 'energy' | 'bladder' | 'hygiene' | 'fun' | 'social';

export const NEED_KEYS: NeedKey[] = ['hunger', 'energy', 'bladder', 'hygiene', 'fun', 'social'];

export const NEED_LABELS: Record<NeedKey, { label: string; icon: string }> = {
  hunger: { label: 'Fome', icon: 'fa-utensils' },
  energy: { label: 'Energia', icon: 'fa-bolt' },
  bladder: { label: 'Bexiga', icon: 'fa-toilet' },
  hygiene: { label: 'Higiene', icon: 'fa-shower' },
  fun: { label: 'Diversão', icon: 'fa-face-laugh-beam' },
  social: { label: 'Social', icon: 'fa-comments' },
};

export type Needs = Record<NeedKey, number>;

export type SimGender = 'male' | 'female';

export interface SimAppearance {
  gender: SimGender;
  skin: string;
  top: string;
  bottom: string;
  shoes: string;
}

export type TraitId = 'ativo' | 'criativo' | 'glutao' | 'preguicoso' | 'sociavel' | 'geek' | 'limpinho' | 'solitario';

export interface TraitDef {
  id: TraitId;
  label: string;
  icon: string;
  description: string;
  decay?: Partial<Record<NeedKey, number>>;
  likes?: string[];
}

export type Posture = 'stand' | 'sit' | 'lie';
export type SimActivity = 'idle' | 'walking' | 'interacting';
export type SimAnim = 'idle' | 'walk' | 'run' | 'jump';

export interface QueuedAction {
  id: string;
  label: string;
  icon: string;
  kind: 'interaction' | 'goto' | 'social';
  objectId?: string;
  interactionId?: string;
  target?: { x: number; z: number };
  targetSimId?: string;
  autonomous?: boolean;
}

export type SkillId = 'culinaria' | 'logica' | 'musica' | 'fitness' | 'carisma' | 'jardinagem';

export const SKILL_LABELS: Record<SkillId, { label: string; icon: string }> = {
  culinaria: { label: 'Culinária', icon: 'fa-kitchen-set' },
  logica: { label: 'Lógica', icon: 'fa-chess' },
  musica: { label: 'Música', icon: 'fa-guitar' },
  fitness: { label: 'Fitness', icon: 'fa-dumbbell' },
  carisma: { label: 'Carisma', icon: 'fa-masks-theater' },
  jardinagem: { label: 'Jardinagem', icon: 'fa-seedling' },
};

export interface SimData {
  id: string;
  name: string;
  appearance: SimAppearance;
  traits: TraitId[];
  needs: Needs;
  skills: Partial<Record<SkillId, number>>;
  relationships: Record<string, number>;
  x: number;
  z: number;
  rotation: number;
  queue: QueuedAction[];
  activity: SimActivity;
  posture: Posture;
  anim: SimAnim;
  progress: number;
  emote: string | null;
  speech: string | null;
}

export type MoodId = 'inspirado' | 'feliz' | 'bem' | 'tenso' | 'triste';

export interface MoodInfo {
  id: MoodId;
  label: string;
  color: string;
}

export interface SimSnapshot {
  sims: SimData[];
  activeSimId: string | null;
  minutes: number;
  day: number;
  speed: number;
  autonomy: boolean;
}
