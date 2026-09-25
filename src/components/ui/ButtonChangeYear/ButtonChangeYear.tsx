import style from './ButtonChangeYear.module.scss';

interface Props {
	text?: string;
}

//TODO: Сделать функцию смены года + изменения самой карты в соответствии с годом
const changeYear = () => {};

export function ButtonChangeYear({ text }: Props) {
	return (
		<button
			onClick={changeYear}
			className={style.yearButton}
		>
			{text}
		</button>
	);
}
