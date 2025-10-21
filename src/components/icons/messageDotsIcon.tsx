export function MessageDotsIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      className={className}
    >
      <g stroke="currentColor" clipPath="url(#a)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.291 26.966a.937.937 0 0 1-1.541-.716V7.5a.937.937 0 0 1 .938-.938h20.625a.937.937 0 0 1 .937.938v15a.938.938 0 0 1-.938.938H9.668a.938.938 0 0 0-.604.22l-3.773 3.308Z"
        />
        <path
          fill="#004955"
          d="M15 14.094a.906.906 0 1 1 0 1.812.906.906 0 0 1 0-1.812ZM9.844 14.094a.906.906 0 1 1 0 1.812.906.906 0 0 1 0-1.812ZM20.156 14.094a.906.906 0 1 1 0 1.812.906.906 0 0 1 0-1.812Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
