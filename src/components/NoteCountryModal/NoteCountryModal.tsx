import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { prettyNumbers } from '@/utils/prettyNumbers';
import { INDICATOR_NOTE } from '../WorldMap/country.data';
import style from './NoteCountryModal.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  indicator: TIndicator;
  isHoverCountry: ICountry;
  sellectYear: number;
}

export function NoteCountryModal({
  fetchData,
  isHoverCountry,
  sellectYear,
  indicator
}: Props) {
  const data = getDataInYearById(
    fetchData[indicator],
    isHoverCountry,
    sellectYear
  );

  const note = INDICATOR_NOTE[indicator];

  return (
    <div className={style.wrapper}>
      <h1>{isHoverCountry.name}</h1>
      {getDataInYearById(
        fetchData[indicator],
        isHoverCountry,
        sellectYear
      ) ? (
        <p>
          {note.label}: ~{prettyNumbers(data)}
          {note.unit}.
        </p>
      ) : (
        <p>Нет данных за этот год.</p>
      )}
    </div>
  );
}
