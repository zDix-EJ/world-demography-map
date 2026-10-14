import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { DataCountryPanel } from '../DataCountryPanel/DataCountryPanel';
import { HudPanel } from '../HudPanel/HudPanel';
import style from './HudLayout.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;

  currentYear: number;

  selectCountry: ICountry | null;
  setSelectCountry: (select: ICountry | null) => void;

  indicator: TIndicator;
  setIndicator: (indicator: TIndicator) => void;
}

export function HudLayout({
  fetchData,
  indicator,
  setIndicator,
  selectCountry,
  setSelectCountry,
  currentYear
}: Props) {
  return (
    <div className={style.hudLayout}>
      <HudPanel
        indicator={indicator}
        setIndicator={setIndicator}
      />
      <DataCountryPanel
        fetchData={fetchData}
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        currentYear={currentYear}
      />
    </div>
  );
}
