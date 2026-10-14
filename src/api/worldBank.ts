import {
  IDataCountry,
  IPopulationData,
  NUMERIC_BY_ISO3,
  TIndicator
} from '@/types/data';

export type TCodeRes =
  'SP.POP.TOTL' | 'SP.DYN.TFRT.IN' | 'SP.DYN.CDRT.IN' | 'SP.DYN.LE00.IN';

export const REQ_T0_WORLDBANK: Record<TIndicator, TCodeRes> = {
  population: 'SP.POP.TOTL',
  fertility: 'SP.DYN.TFRT.IN',
  deathRate: 'SP.DYN.CDRT.IN',
  lifeExpectancy: 'SP.DYN.LE00.IN'
};

type WBResponse = [
  { page: number; pages: number; total: number },

  Array<{
    country: { id: string; value: string };
    countryiso3code: string;
    date: string;
    value: number | null;
  }>
];

export async function dataWorldBank(codeRes: TCodeRes): Promise<WBResponse> {
  try {
    const res = await fetch(
      `https://api.worldbank.org/v2/country/all/indicator/${codeRes}?format=json&date=1990:${new Date().getFullYear()}&per_page=30000`
    );

    if (!res.ok) throw new Error(`Ошибка HTTP запроса: ${res.status}`);

    const resJson = await res.json();

    return resJson as WBResponse;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function toPopulationData(entryJSON: WBResponse): IPopulationData {
  const dataById: Record<string, IDataCountry> = {};
  const years = new Set<number>();

  for (const data of entryJSON[1]) {
    const id = NUMERIC_BY_ISO3[data.countryiso3code];
    years.add(Number(data.date));

    if (!id) continue;

    if (!dataById[id]) {
      dataById[id] = {
        id,
        name: data.country.value,
        values: {}
      };
    }
    dataById[id].values[Number(data.date)] = data.value;
  }

  return {
    years: [...years].sort((a, b) => a - b),
    data: Object.values(dataById)
  };
}
