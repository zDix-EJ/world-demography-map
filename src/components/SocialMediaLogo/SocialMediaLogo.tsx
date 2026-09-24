import styles from './SocialMediaLogo.module.scss';

interface Props {
	logo: string;
	alt: string;
	url: string;
}

export function SocialMediaLogo({ logo, alt, url }: Props) {
	return (
		<div className={styles.logoBox}>
			<a href={url}>
				<img
					src={logo}
					alt={alt}
				/>
			</a>
		</div>
	);
}
