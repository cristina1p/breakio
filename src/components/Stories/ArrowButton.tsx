import styles from "./ArrowButton.module.css";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
  disabled: boolean;
}

export function ArrowButton({
  direction,
  onClick,
  className,
  disabled,
}: ArrowButtonProps) {
  // combine the base style with a condition style for both sides
  const buttonClass = `${styles.arrowButton} ${direction === "right" ? styles.right : styles.left}  ${disabled ? styles.disabled : ""} ${className || ""} `;
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction} scroll`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g opacity="0.5">
          <rect x="1" y="1" width="46" height="46" rx="23" fill="white" />
          <rect
            x="1"
            y="1"
            width="46"
            height="46"
            rx="23"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M22.757 23.9999L27.707 28.9499C27.8025 29.0422 27.8787 29.1525 27.9311 29.2745C27.9835 29.3965 28.0111 29.5278 28.0122 29.6605C28.0134 29.7933 27.9881 29.925 27.9378 30.0479C27.8875 30.1708 27.8133 30.2824 27.7194 30.3763C27.6255 30.4702 27.5138 30.5445 27.3909 30.5948C27.268 30.645 27.1364 30.6703 27.0036 30.6692C26.8708 30.668 26.7396 30.6404 26.6176 30.588C26.4956 30.5356 26.3852 30.4594 26.293 30.3639L20.636 24.7069C20.4485 24.5194 20.3432 24.2651 20.3432 23.9999C20.3432 23.7348 20.4485 23.4805 20.636 23.2929L26.293 17.6359C26.4816 17.4538 26.7342 17.353 26.9964 17.3553C27.2586 17.3575 27.5094 17.4627 27.6948 17.6481C27.8802 17.8335 27.9854 18.0843 27.9877 18.3465C27.9899 18.6087 27.8891 18.8613 27.707 19.0499L22.757 23.9999Z"
            fill="#475569"
          />
        </g>
      </svg>
    </button>
  );
}
