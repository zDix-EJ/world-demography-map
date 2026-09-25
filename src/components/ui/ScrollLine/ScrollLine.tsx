import style from './ScrollLine.module.scss';

//TODO: Взять из мока начальное значение

interface Props {}

export function ScrollLine({}: Props) {
	return (
		<div className={style.lineBox}>
			<input
				className={style.line}
				type="range"
				name="changeYear"
				id="changeYear"
				value={0}
			/>
		</div>
	);
}
