import { ICountry } from '@/types/country';
import { TIndicator } from '@/types/data';
import { DataCountryPanel } from '../DataCountryPanel/DataCountryPanel';
import { HudPanel } from '../HudPanel/HudPanel';
import style from './HudLayout.module.scss';

interface Props {
  currentYear: number;

  selectCountry: ICountry | null;
  setSelectCountry: (select: ICountry | null) => void;

  indicator: TIndicator;
  setIndicator: (indicator: TIndicator) => void;
}

export function HudLayout({
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
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        currentYear={currentYear}
      />
    </div>
  );
}
