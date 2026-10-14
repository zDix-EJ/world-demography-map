import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { prettyNumbers } from '@/utils/prettyNumbers';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CrossButton } from '../ui/CrossButton/CrossButton';
import style from './Dashboard.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  currentYear: number;
  selectCountry: ICountry | null;
  setSelectCountry: (select: ICountry | null) => void;
}

export function Dashboard({
  fetchData,
  selectCountry,
  setSelectCountry,
  currentYear
}: Props) {
  const [isShowCountry, setIsShow] = useState<ICountry | null>(null);

  useEffect(() => {
    if (selectCountry) setIsShow(selectCountry);
  }, [selectCountry]);
  if (!isShowCountry) return null;

  const population = prettyNumbers(
    getDataInYearById(fetchData.population, isShowCountry, currentYear)
  );
  const fertility = prettyNumbers(
    getDataInYearById(fetchData.fertility, isShowCountry, currentYear)
  );
  const deathRate = prettyNumbers(
    getDataInYearById(fetchData.deathRate, isShowCountry, currentYear)
  );
  const lifeExpectancy = prettyNumbers(
    getDataInYearById(fetchData.lifeExpectancy, isShowCountry, currentYear)
  );

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
        <p>Населенние: {population != null ? `${population}ч.` : 'Нет данных'}</p>
        <p>Рождаемости на женщину: {fertility ?? 'Нет данных'}</p>
        <p>Коэф.смертности: {deathRate ?? 'Нет данных'}</p>
        <p>Продолжительность жизни: {lifeExpectancy ?? 'Нет данных'}</p>
      </div>
      <hr className={style.separator} />
    </div>
  );
}
