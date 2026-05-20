import styles from "./SkipLink.module.css";

interface SkipLinkProps {
  mainId: string;
}

function SkipLink({ mainId }: SkipLinkProps) {
  return (
    <a
      href={`#${mainId}`}
      className={styles.skipLink}
      aria-label="Skip to main content"
      tabIndex={-1}
    >
      <span tabIndex={0}>[skip to main content]</span>
    </a>
  );
}

export { SkipLink };
