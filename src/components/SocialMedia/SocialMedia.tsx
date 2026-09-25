import { SOCIAL_LINKS } from '../SocialMediaLogo/logos.data';
import { SocialMediaLogo } from '../SocialMediaLogo/SocialMediaLogo';
import styles from './SocialMedia.module.scss';

interface Props {}

export function SocialMedia({}: Props) {
	return (
		<div className={styles.socialMedia}>
			{SOCIAL_LINKS.map((link) => (
				<SocialMediaLogo
					key={link.alt}
					logo={link.logo}
					alt={link.alt}
					url={link.url}
				/>
			))}
		</div>
	);
}
