import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ChangeYears } from '@/components/ChangeYears/ChangeYears';
import { HudPanel } from '@/components/HudPanel/HudPanel';
import { SocialMedia } from '@/components/SocialMedia/SocialMedia';
import { WorldMap } from '@/components/WorldMap/WorldMap';
import { TIndicator } from '@/types/data';
import { useState } from 'react';
import style from './MapScreen.module.scss';

interface Props {}

export function MapScreen({}: Props) {
	const [year, setYear] = useState<number>(2019);
	const [indicator, setIndicator] = useState<TIndicator>('population');

	return (
		<div className={style.screen}>
			<AppHeader />
			<HudPanel
				indicator={indicator}
				setIndicator={setIndicator}
			/>
			<WorldMap
				indicator={indicator}
				sellectYear={year}
			/>
			<SocialMedia />
			<ChangeYears
				currentYear={year}
				setYear={setYear}
			/>
		</div>
	);
}
