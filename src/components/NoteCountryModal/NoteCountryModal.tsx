import { ICountry } from '@/types/country';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { prettyNumbers } from '@/utils/prettyNumbers';
import { mockPopulationData } from '../WorldMap/country.data';
import style from './NoteCountryModal.module.scss';

interface Props {
	isHoverCountry: ICountry;
	sellectYear: number;
}

export function NoteCountryModal({ isHoverCountry, sellectYear }: Props) {
	const data = getDataInYearById(
		mockPopulationData,
		isHoverCountry,
		sellectYear
	);

	return (
		<div className={style.wrapper}>
			<h1>{isHoverCountry.name}</h1>
			{getDataInYearById(mockPopulationData, isHoverCountry, sellectYear) ? (
				<p>Население: ~{prettyNumbers(data)} человек.</p>
			) : (
				<p>Нет данных за этот год.</p>
			)}
		</div>
	);
}
