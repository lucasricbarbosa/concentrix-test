import * as React from 'react'
export const ConcentrixMiniLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#25E2CC"
      d="M28.502 19.766H9.498C4.252 19.766 0 15.343 0 9.888v-.009C0 4.424 4.252.001 9.498.001h19.004C33.748.001 38 4.424 38 9.88v.009c0 5.455-4.252 9.878-9.498 9.878Z"
    />
    <path
      fill="#003D5B"
      d="M28.5 19.756c5.245 0 9.498-4.423 9.498-9.878C37.998 4.422 33.745 0 28.5 0c-5.246 0-9.498 4.422-9.498 9.878 0 5.455 4.252 9.878 9.498 9.878Z"
    />
  </svg>
)
