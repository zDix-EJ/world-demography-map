import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ChangeYears } from '@/components/ChangeYears/ChangeYears';
import { HudLayout } from '@/components/HudLayout/HudLayout';
import { SocialMedia } from '@/components/SocialMedia/SocialMedia';
import { WorldMap } from '@/components/WorldMap/WorldMap';
import { ICountry } from '@/types/country';
import { TIndicator } from '@/types/data';
import { useState } from 'react';
import style from './MapScreen.module.scss';

interface Props {}

export function MapScreen({}: Props) {
  const [year, setYear] = useState<number>(2019);
  const [indicator, setIndicator] = useState<TIndicator>('population');
  const [selectCountry, setSelectCountry] = useState<ICountry | null>(null);

  return (
    <div className={style.screen}>
      <AppHeader />
      <HudLayout
        indicator={indicator}
        setIndicator={setIndicator}
        selectCountry={selectCountry}
        setSelectCountry={setSelectCountry}
        currentYear={year}
      />
      <WorldMap
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
    </div>
  );
}
