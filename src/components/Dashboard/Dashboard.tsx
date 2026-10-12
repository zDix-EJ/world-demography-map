import { ICountry } from '@/types/country';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { prettyNumbers } from '@/utils/prettyNumbers';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CrossButton } from '../ui/CrossButton/CrossButton';
import { DATASET } from '../WorldMap/country.data';
import style from './Dashboard.module.scss';

interface Props {
  currentYear: number;
  selectCountry: ICountry | null;
  setSelectCountry: (select: ICountry | null) => void;
}

export function Dashboard({
  selectCountry,
  setSelectCountry,
  currentYear
}: Props) {
  const [isShowCountry, setIsShow] = useState<ICountry | null>(null);

  useEffect(() => {
    if (selectCountry) setIsShow(selectCountry);
  }, [selectCountry]);
  if (!isShowCountry) return null;

  return (
    <div
      className={clsx(style.dashboard, !selectCountry && style.close)}
      onTransitionEnd={() => setIsShow(null)}
    >
      <div className={style.header}>
        <h2>Полная информация по {isShowCountry.name}</h2>
        <CrossButton
          onClose={() => setSelectCountry(null)}
          alt="Закртыть панель с информацией"
        />
      </div>
      <hr className={style.separator} />
      <div className={style.infoBox}>
        <p>
          Населенние:{' '}
          {prettyNumbers(
            getDataInYearById(DATASET.population, isShowCountry, currentYear)
          )}{' '}
          ч.
        </p>
        <p>
          Рождаемости на женщину:{' '}
          {prettyNumbers(
            getDataInYearById(DATASET.fertility, isShowCountry, currentYear)
          )}
        </p>
        <p>
          Коэф.смертности:{' '}
          {prettyNumbers(
            getDataInYearById(DATASET.deathRate, isShowCountry, currentYear)
          )}
        </p>
        <p>
          Продолжительность жизни:{' '}
          {prettyNumbers(
            getDataInYearById(
              DATASET.lifeExpectancy,
              isShowCountry,
              currentYear
            )
          )}
        </p>
      </div>
      <hr className={style.separator} />
    </div>
  );
}
