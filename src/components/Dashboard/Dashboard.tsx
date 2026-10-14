import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { getIndicatorColor } from '@/utils/getIndicatorColor';
import { prettyNumbers } from '@/utils/prettyNumbers';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { INDICATOR_NOTE } from '../WorldMap/country.data';
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

  const stats: { key: TIndicator; value: number | null | undefined }[] = [
    {
      key: 'population',
      value: getDataInYearById(fetchData.population, isShowCountry, currentYear)
    },
    {
      key: 'fertility',
      value: getDataInYearById(fetchData.fertility, isShowCountry, currentYear)
    },
    {
      key: 'deathRate',
      value: getDataInYearById(fetchData.deathRate, isShowCountry, currentYear)
    },
    {
      key: 'lifeExpectancy',
      value: getDataInYearById(
        fetchData.lifeExpectancy,
        isShowCountry,
        currentYear
      )
    }
  ];

  return (
    <div
      className={clsx(style.dashboard, !selectCountry && style.close)}
      onTransitionEnd={() => setIsShow(null)}
    >
      <div className={style.header}>
        <div className={style.titleBlock}>
          <p className={style.kicker}>Полная информация</p>
          <h2>{isShowCountry.name}</h2>
          <span className={style.year}>{currentYear}</span>
        </div>
        <CrossButton
          onClose={() => setSelectCountry(null)}
          alt="Закртыть панель с информацией"
        />
      </div>
      <ul className={style.stats}>
        {stats.map((stat) => {
          const note = INDICATOR_NOTE[stat.key];
          const hasValue = stat.value != null;

          return (
            <li
              className={clsx(style.stat, !hasValue && style.statEmpty)}
              key={stat.key}
              style={{
                borderLeftWidth: 3,
                borderLeftStyle: 'solid',
                borderLeftColor: getIndicatorColor(stat.value, stat.key)
              }}
            >
              <span className={style.label}>{note.label}</span>
              <span className={style.value}>
                {hasValue ? prettyNumbers(stat.value) : '—'}
              </span>
              <span className={style.unit}>
                {hasValue ? note.unit : 'Нет данных'}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
