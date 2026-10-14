import { IPopulationData, TIndicator } from '@/types/data';

const INDICATORS: TIndicator[] = [
  'population',
  'fertility',
  'deathRate',
  'lifeExpectancy'
];

export function getLatestCompleteYear(
  fetchData: Record<TIndicator, IPopulationData>
): number {
  const years = new Set<number>();
  for (const key of INDICATORS) {
    for (const year of fetchData[key].years) years.add(year);
  }

  const sorted = [...years].sort((a, b) => b - a);

  for (const year of sorted) {
    const complete = INDICATORS.every((key) =>
      fetchData[key].data.some((country) => country.values[year] != null)
    );
    if (complete) return year;
  }

  return sorted[0] ?? new Date().getFullYear() - 1;
}
