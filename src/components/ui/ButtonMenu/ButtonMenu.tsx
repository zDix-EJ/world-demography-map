import { TIndicator } from '@/types/data';
import clsx from 'clsx';
import style from './ButtonMenu.module.scss';

interface Props {
	text: string;
	buttonIndicator: TIndicator;
	indicator: TIndicator;
	setIndicator: (indicator: TIndicator) => void;
}

export function ButtonMenu({
	text,
	buttonIndicator,
	indicator,
	setIndicator
}: Props) {
	const changeIndicator = () => setIndicator(buttonIndicator);
	const isActive = indicator == buttonIndicator;
	return (
		<button
			className={clsx(style.button, isActive && style.active)}
			onClick={changeIndicator}
		>
			{text}
		</button>
	);
}
