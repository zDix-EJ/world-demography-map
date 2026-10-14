import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ChangeYears } from '@/components/ChangeYears/ChangeYears';
import { HudLayout } from '@/components/HudLayout/HudLayout';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { SocialMedia } from '@/components/SocialMedia/SocialMedia';
import { WorldMap } from '@/components/WorldMap/WorldMap';
import { ICountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { useState } from 'react';
import style from './MapScreen.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  year: number;
  setYear: (year: number) => void;
}

export function MapScreen({ fetchData, year, setYear }: Props) {
  const [indicator, setIndicator] = useState<TIndicator>('population');
  const [selectCountry, setSelectCountry] = useState<ICountry | null>(null);

  return (
    <div className={style.screen}>
      <AppHeader />
      <HudLayout
        fetchData={fetchData}
        indicator={indicator}
        setIndicator={setIndicator}
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        currentYear={year}
      />
      <WorldMap
        fetchData={fetchData}
        indicator={indicator}
        sellectYear={year}
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
      />
      <SocialMedia />
      <ChangeYears
        currentYear={year}
        setYear={setYear}
      />
      <NavMenu />
    </div>
  );
}
