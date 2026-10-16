import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ChangeYears } from '@/components/ChangeYears/ChangeYears';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { SearchByList } from '@/components/SearchByList/SearchByList';
import { SearchListItem } from '@/components/SearchListItem/SearchListItem';
import { IDataCountry, IPopulationData, TIndicator } from '@/types/data';
import { useState } from 'react';
import style from './ListScreen.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  year: number;
  setYear: (year: number) => void;
}

export function ListScreen({ fetchData, year, setYear }: Props) {
  const [sortBy, setSortBy] = useState<TIndicator>('population');
  const [search, setSearch] = useState<string>('');

  const dataByCountres = [...fetchData[sortBy].data];

  const searchingByList = (): IDataCountry[] => {
    const filteredList = dataByCountres.filter((coutry: IDataCountry) =>
      coutry.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    return filteredList;
  };

  const currentData: IDataCountry[] = !search
    ? dataByCountres
    : searchingByList();

  return (
    <div className={style.listLayout}>
      <AppHeader />
      <span className={style.title}>Список данных по странам</span>
      <SearchByList
        search={search}
        setSearch={setSearch}
      />
      <div className={style.listBox}>
        <div className={style.tableScroll}>
          <table className={style.tableList}>
            <thead className={style.listParamsTitles}>
              <tr>
                <th>Страна</th>
                <th onClick={() => setSortBy('population')}>Население</th>
                <th onClick={() => setSortBy('fertility')}>
                  Рождаемость (TFR)
                </th>
                <th onClick={() => setSortBy('deathRate')}>Коэф. смертности</th>
                <th onClick={() => setSortBy('lifeExpectancy')}>
                  Продолж. жизни
                </th>
              </tr>
            </thead>
            <tbody className={style.list}>
              {currentData
                .sort((a, b) => (b.values[year] ?? 0) - (a.values[year] ?? 0))
                .map((country) => {
                  return (
                    <SearchListItem
                      fetchData={fetchData}
                      country={country}
                      year={year}
                      key={country.id}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ChangeYears
        placement="inline"
        currentYear={year}
        setYear={setYear}
      />
      <NavMenu />
    </div>
  );
}
