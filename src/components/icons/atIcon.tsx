export function AtIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
      >
        <path d="M15 19.688a4.688 4.688 0 1 0 0-9.376 4.688 4.688 0 0 0 0 9.376Z" />
        <path d="M21.563 24.375C19.78 25.56 17.3 26.25 15 26.25A11.25 11.25 0 1 1 26.25 15c0 2.589-.938 4.688-3.281 4.688-2.344 0-3.282-2.1-3.282-4.688v-4.688" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
