export function CreditCardIcon({ className = '' }) {
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
        <path d="M26.25 6.563H3.75a.937.937 0 0 0-.938.937v15c0 .518.42.938.938.938h22.5c.518 0 .938-.42.938-.938v-15a.937.937 0 0 0-.938-.938ZM19.688 19.688h3.75M14.063 19.688h1.874M2.813 11.25h24.375" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
