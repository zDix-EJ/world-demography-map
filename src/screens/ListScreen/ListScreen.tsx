import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ChangeYears } from '@/components/ChangeYears/ChangeYears';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { SearchByList } from '@/components/SearchByList/SearchByList';
import { SearchListItem } from '@/components/SearchListItem/SearchListItem';
import { DATASET } from '@/components/WorldMap/country.data';
import { TIndicator } from '@/types/data';
import { useState } from 'react';
import style from './ListScreen.module.scss';

interface Props {
  year: number;
  setYear: (year: number) => void;
}

export function ListScreen({ year, setYear }: Props) {
  const [sortBy, setSortBy] = useState<TIndicator>('population');
  const copyMok = [...DATASET[sortBy].data];
  return (
    <div className={style.listLayout}>
      <AppHeader />
      <span className={style.title}>Список данных по странам</span>
      <SearchByList />
      <div className={style.listBox}>
        <table className={style.tableList}>
          <thead className={style.listParamsTitles}>
            <tr>
              <th>Страна</th>
              <th onClick={() => setSortBy('population')}>Население</th>
              <th onClick={() => setSortBy('fertility')}>Рождаемость (TFR)</th>
              <th onClick={() => setSortBy('deathRate')}>Коэф. смертности</th>
              <th onClick={() => setSortBy('lifeExpectancy')}>
                Продолжительность жизни
              </th>
            </tr>
          </thead>
          <tbody className={style.list}>
            {copyMok
              .sort((a, b) => (b.values[year] ?? 0) - (a.values[year] ?? 0))
              .map((country) => {
                return (
                  <SearchListItem
                    country={country}
                    year={year}
                    key={country.id}
                  />
                );
              })}
          </tbody>
        </table>
        <ChangeYears
          currentYear={year}
          setYear={setYear}
        />
      </div>
      <NavMenu />
    </div>
  );
}
