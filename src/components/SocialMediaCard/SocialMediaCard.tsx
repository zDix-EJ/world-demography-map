import { SOCIAL_LINKS } from '../SocialMediaLogo/logos.data';
import { SocialMediaLogo } from '../SocialMediaLogo/SocialMediaLogo';

interface Props {}

export function SocialMedia({}: Props) {
	return (
		<div>
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
