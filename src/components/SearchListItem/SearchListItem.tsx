import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { prettyNumbers } from '@/utils/prettyNumbers';
import style from './SearchListItem.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  country: ICountry;
  year: number;
}

export function SearchListItem({ fetchData, country, year }: Props) {
  return (
    <tr className={style.item}>
      <td>{country.name}</td>
      <td>
        {prettyNumbers(
          getDataInYearById(fetchData.population, country, year)
        ) ?? 'Нет данных'}
      </td>
      <td>
        {prettyNumbers(
          getDataInYearById(fetchData.fertility, country, year)
        ) ?? 'Нет данных'}
      </td>
      <td>
        {prettyNumbers(
          getDataInYearById(fetchData.deathRate, country, year)
        ) ?? 'Нет данных'}
      </td>
      <td>
        {prettyNumbers(
          getDataInYearById(fetchData.lifeExpectancy, country, year)
        ) ?? 'Нет данных'}
      </td>
    </tr>
  );
}
