import { ICountry } from '@/types/country';
import style from './NoteCountryModal.module.scss';

interface Props {
	isHoverCountry: ICountry;
}

export function NoteCountryModal({ isHoverCountry }: Props) {
	return (
		<div className={style.wrapper}>
			<p>{isHoverCountry.name}</p>
		</div>
	);
}
