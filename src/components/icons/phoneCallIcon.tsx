export function PhoneCallIcon({ className = '' }) {
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
        <path d="M18.75 4.688a9.211 9.211 0 0 1 6.563 6.562M17.813 8.438c1.935.517 3.232 1.814 3.75 3.75M19.265 17.032a.938.938 0 0 1 .889-.081l5.526 2.476a.937.937 0 0 1 .563.973 5.664 5.664 0 0 1-5.618 4.912A15.937 15.937 0 0 1 4.687 9.375 5.664 5.664 0 0 1 9.6 3.757a.937.937 0 0 1 .973.562l2.476 5.531a.937.937 0 0 1-.077.883l-2.505 2.977a.93.93 0 0 0-.063.916c.969 1.984 3.02 4.01 5.01 4.97a.928.928 0 0 0 .917-.07l2.934-2.494Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
