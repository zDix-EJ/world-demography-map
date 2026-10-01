import { TIndicator } from '@/types/data';
import { ButtonMenu } from '../ui/ButtonMenu/ButtonMenu';
import style from './Menu.module.scss';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	indicator: TIndicator;
	setIndicator: (indicator: TIndicator) => void;
}

export function Menu({ isOpen, setIsOpen, indicator, setIndicator }: Props) {
	const MENU_BUTTONS: { buttonIndicator: TIndicator; text: string }[] = [
		{ buttonIndicator: 'population', text: 'Население' },
		{ buttonIndicator: 'fertility', text: 'Рождаемость (TFR)' },
		{ buttonIndicator: 'deathRate', text: 'Коэф. смертности' },
		{ buttonIndicator: 'lifeExpectancy', text: 'Продолжительность жизни' }
	];

	return (
		<div className={style.menu}>
			<h1>Меню</h1>
			<hr className={style.separator} />
			<div className={style.buttonBox}>
				<p>Данные на карте</p>
				{MENU_BUTTONS.map((button) => (
					<ButtonMenu
						buttonIndicator={button.buttonIndicator}
						text={button.text}
						indicator={indicator}
						setIndicator={setIndicator}
					/>
				))}
			</div>
			<hr className={style.separator} />
			<div className={style.info}>
				<p>Источники</p>
			</div>
		</div>
	);
}
