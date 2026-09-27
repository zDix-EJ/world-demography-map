import style from './ScrollLine.module.scss';

interface Props {
	currentYear: number;
	setYear: (year: number) => void;
}

export function ScrollLine({ currentYear, setYear }: Props) {
	const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
		setYear(Number(event.target.value));
	};

	return (
		<div className={style.lineBox}>
			<label
				htmlFor="changeYear"
				className={style.lineLabel}
			>
				{currentYear}
			</label>
			<input
				className={style.line}
				type="range"
				id="changeYear"
				min={2019}
				max={2026}
				step={1}
				value={currentYear}
				onChange={handleChangeYear}
			/>
		</div>
	);
}
