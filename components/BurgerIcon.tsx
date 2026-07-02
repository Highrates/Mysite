type BurgerIconProps = {
  isOpen: boolean;
};

export function BurgerIcon({ isOpen }: BurgerIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 8H19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="transition-transform duration-200 ease-out"
        style={{
          transformOrigin: "12px 8px",
          transform: isOpen ? "translateY(4px) rotate(45deg)" : "none",
        }}
      />
      <path
        d="M5 16H19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="transition-transform duration-200 ease-out"
        style={{
          transformOrigin: "12px 16px",
          transform: isOpen ? "translateY(-4px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}
