import { ICountry } from '@/types/country';
import { TIndicator } from '@/types/data';
import { DataCountryPanel } from '../DataCountryPanel/DataCountryPanel';
import { HudPanel } from '../HudPanel/HudPanel';
import style from './HudLayout.module.scss';

interface Props {
	currentYear: number;

	selectCountry: ICountry | null;

	indicator: TIndicator;
	setIndicator: (indicator: TIndicator) => void;
}

export function HudLayout({
	indicator,
	setIndicator,
	selectCountry,
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
				currentYear={currentYear}
			/>
		</div>
	);
}
