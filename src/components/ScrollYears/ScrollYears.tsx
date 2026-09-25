import { ButtonChangeYear } from '../ui/ButtonChangeYear/ButtonChangeYear';
import { ScrollLine } from '../ui/ScrollLine/ScrollLine';
import style from './ScrollYears.module.scss';

interface Props {}

export function ScrollYears({}: Props) {
	return (
		<div className={style.scrollBar}>
			<ButtonChangeYear />
			<ScrollLine />
			<input type="text" />
		</div>
	);
}
