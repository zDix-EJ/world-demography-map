import { ICountry } from '@/types/country';
import { useState } from 'react';
import { Dashboard } from '../Dashboard/Dashboard';
import { ArrowOpenMenu } from '../ui/ArrowOpenMenu/ArrowOpenMenu';
import style from './DataCountryPanel.module.scss';

interface Props {
	currentYear: number;
	selectCountry: ICountry | null;
}

export function DataCountryPanel({ selectCountry, currentYear }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={style.panel}>
			<ArrowOpenMenu
				startWay="left"
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<Dashboard
				selectCountry={selectCountry}
				currentYear={currentYear}
			/>
		</div>
	);
}
