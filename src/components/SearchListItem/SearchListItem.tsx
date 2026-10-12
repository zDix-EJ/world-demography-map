import { ICountry } from '@/types/country';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { prettyNumbers } from '@/utils/prettyNumbers';
import { DATASET } from '../WorldMap/country.data';
import style from './SearchListItem.module.scss';

interface Props {
  country: ICountry;
  year: number;
}

export function SearchListItem({ country, year }: Props) {
  return (
    <tr className={style.item}>
      <td>{country.name}</td>
      <td>
        {prettyNumbers(
          getDataInYearById(DATASET['population'], country, year)
        ) ?? 'Нет данных'}
      </td>
      <td>
        {prettyNumbers(
          getDataInYearById(DATASET['fertility'], country, year)
        ) ?? 'Нет данных'}
      </td>
      <td>
        {prettyNumbers(
          getDataInYearById(DATASET['deathRate'], country, year)
        ) ?? 'Нет данных'}
      </td>
      <td>
        {prettyNumbers(
          getDataInYearById(DATASET['lifeExpectancy'], country, year)
        ) ?? 'Нет данных'}
      </td>
    </tr>
  );
}
