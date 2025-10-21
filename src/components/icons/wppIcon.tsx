export function WppIcon({ className = '' }) {
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
        <path d="M8.438 12.188a3.75 3.75 0 0 1 3.75-3.75l1.874 3.75-1.443 2.164a5.647 5.647 0 0 0 3.029 3.03l2.165-1.445 3.75 1.876a3.75 3.75 0 0 1-3.75 3.75 9.375 9.375 0 0 1-9.375-9.375Z" />
        <path d="M9.366 24.737a11.25 11.25 0 1 0-4.102-4.102l-1.466 4.377a.938.938 0 0 0 1.186 1.186l4.382-1.461Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
