import { ICountry } from '@/types/country';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { DATASET } from '../WorldMap/country.data';
import style from './Dashboard.module.scss';

interface Props {
	currentYear: number;
	selectCountry: ICountry | null;
}

export function Dashboard({ selectCountry, currentYear }: Props) {
	if (!selectCountry) {
		return (
			<div className={style.dashboard}>
				<p>Выберите страну на карте</p>
			</div>
		);
	}
	return (
		<div className={style.dashboard}>
			<h2>Полная информация по {selectCountry.name}</h2>
			<hr className={style.separator} />
			<div className={style.infoBox}>
				<p>
					Населенние:{' '}
					{getDataInYearById(DATASET.population, selectCountry, currentYear)}
				</p>
				<p>
					Рождаемости на женщину:{' '}
					{getDataInYearById(DATASET.fertility, selectCountry, currentYear)}
				</p>
				<p>
					Коэф.смертности:{' '}
					{getDataInYearById(DATASET.deathRate, selectCountry, currentYear)}
				</p>
				<p>
					Продолжительность жизни:{' '}
					{getDataInYearById(
						DATASET.lifeExpectancy,
						selectCountry,
						currentYear
					)}
				</p>
			</div>
			<hr className={style.separator} />
		</div>
	);
}
