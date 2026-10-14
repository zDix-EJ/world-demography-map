import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { Dashboard } from '../Dashboard/Dashboard';
import style from './DataCountryPanel.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  currentYear: number;
  selectCountry: ICountry | null;
  setSelectCountry: (select: ICountry | null) => void;
}

export function DataCountryPanel({
  fetchData,
  selectCountry,
  setSelectCountry,
  currentYear
}: Props) {
  return (
    <div className={style.panel}>
      <Dashboard
        fetchData={fetchData}
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        currentYear={currentYear}
      />
    </div>
  );
}
