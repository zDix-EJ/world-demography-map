import { ICountry } from '@/types/country';
import { Dashboard } from '../Dashboard/Dashboard';
import style from './DataCountryPanel.module.scss';

interface Props {
  currentYear: number;
  selectCountry: ICountry | null;
  setSelectCountry: (select: ICountry | null) => void;
}

export function DataCountryPanel({
  selectCountry,
  setSelectCountry,
  currentYear
}: Props) {
  return (
    <div className={style.panel}>
      <Dashboard
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        currentYear={currentYear}
      />
    </div>
  );
}
