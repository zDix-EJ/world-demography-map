import { TIndicator } from '@/types/data';

export const MENU_BUTTONS: { buttonIndicator: TIndicator; text: string }[] = [
  { buttonIndicator: 'population', text: 'Население' },
  { buttonIndicator: 'fertility', text: 'Рождаемость (TFR)' },
  { buttonIndicator: 'deathRate', text: 'Коэф. смертности' },
  { buttonIndicator: 'lifeExpectancy', text: 'Продолжительность жизни' }
];
