import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  dataWorldBank,
  REQ_T0_WORLDBANK,
  toPopulationData
} from './api/worldBank';
import { Loader } from './components/Loader/Loader';
import { ListScreen } from './screens/ListScreen/ListScreen';
import { MapScreen } from './screens/MapScreen/MapScreen';
import { IPopulationData, TIndicator } from './types/data';
import { getLatestCompleteYear } from './utils/getLatestCompleteYear';

export default function App() {
  const [error, setError] = useState<string>();
  const [year, setYear] = useState<number>(
    Number(new Date().getFullYear() - 1)
  );
  const [fetchData, setFetchData] = useState<Record<
    TIndicator,
    IPopulationData
  > | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [pop, tfr, death, life] = await Promise.all([
          dataWorldBank(REQ_T0_WORLDBANK.population),
          dataWorldBank(REQ_T0_WORLDBANK.fertility),
          dataWorldBank(REQ_T0_WORLDBANK.deathRate),
          dataWorldBank(REQ_T0_WORLDBANK.lifeExpectancy)
        ]);
        const parsed = {
          population: toPopulationData(pop),
          fertility: toPopulationData(tfr),
          deathRate: toPopulationData(death),
          lifeExpectancy: toPopulationData(life)
        };
        setFetchData(parsed);
        setYear(getLatestCompleteYear(parsed));
      } catch (error) {
        const text =
          error instanceof Error
            ? error.message
            : 'Не удалось загрузить данные';
        setError(text);
      }
    }
    load();
  }, []);
  if (error) return <Loader error={error} />;
  if (!fetchData) {
    return <Loader message="Загружаем данные World Bank…" />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MapScreen
                fetchData={fetchData}
                year={year}
                setYear={setYear}
              />
            }
          />
          <Route
            path="/list"
            element={
              <ListScreen
                fetchData={fetchData}
                year={year}
                setYear={setYear}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
