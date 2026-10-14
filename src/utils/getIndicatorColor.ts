import { COLOR_STEPS } from '@/components/WorldMap/country.data';
import { TIndicator } from '@/types/data';

export function getIndicatorColor(
  value: number | null | undefined,
  indicator: TIndicator
) {
  if (value == null) return '#0c1b28';
  const needStap = COLOR_STEPS[indicator].find((color) => value < color.max);
  const color = needStap?.color ?? '#d7f1ff';
  return color;
}
