import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ChangeYears } from '@/components/ChangeYears/ChangeYears';
import { HudPanel } from '@/components/HudPanel/HudPanel';
import { SocialMedia } from '@/components/SocialMedia/SocialMedia';
import { WorldMap } from '@/components/WorldMap/WorldMap';
import { useState } from 'react';
import style from './MapScreen.module.scss';

interface Props {}

export function MapScreen({}: Props) {
	const [year, setYear] = useState<number>(2019);

	return (
		<div className={style.screen}>
			<AppHeader />
			<HudPanel />
			<WorldMap sellectYear={year} />
			<SocialMedia />
			<ChangeYears
				currentYear={year}
				setYear={setYear}
			/>
		</div>
	);
}
