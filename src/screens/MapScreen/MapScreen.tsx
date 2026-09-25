import { AppHeader } from '@/components/AppHeader/AppHeader';
import { SocialMedia } from '@/components/SocialMedia/SocialMedia';
import { WorldMap } from '@/components/WorldMap/WorldMap';
import style from './MapScreen.module.scss';

interface Props {}

export function MapScreen({}: Props) {
	return (
		<div className={style.screen}>
			<AppHeader />
			<WorldMap />
			<SocialMedia />
		</div>
	);
}
