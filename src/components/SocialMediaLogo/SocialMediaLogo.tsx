import styles from './SocialMediaLogo.module.scss';

interface Props {
  logo: string;
  alt: string;
  url: string;
}

export function SocialMediaLogo({ logo, alt, url }: Props) {
  return (
    <div className={styles.logoBox}>
      <a
        className={styles.logoLink}
        href={url}
        target="_blank"
      >
        <img
          src={logo}
          alt={alt}
        />
      </a>
      <span className={styles.logoNote}>{alt}</span>
    </div>
  );
}
