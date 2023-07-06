import React from 'react'

type Props = {
    size: string
}

const Logo = ({ size }: Props) => {
  return (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width= {size}
        height={size}
        viewBox='0 0 76 76'
      >
        {/* right circle */}
        <circle
          cx='38'
          cy='54'
          r='14'
          fill='none'
          stroke='white'
          strokeWidth='2'
          transform='rotate(-90 38 38)'
        />  
        {/* left circle */}
        <circle
          cx='38'
          cy='24'
          r='14'
          fill='none'
          stroke='white'
          strokeWidth='2'
          transform='rotate(-90 38 38)'
        />
        {/* bottom circle */}
        <circle
          cx='25'
          cy='39'
          r='14'
          fill='none'
          stroke='white'
          strokeWidth='2'
          transform='rotate(-90 38 38)'
        />
        {/* Top Circle */}
        <circle
          cx='54'
          cy='39'
          r='14'
          fill='none'
          stroke='white'
          strokeWidth='2'
          transform='rotate(-90 38 38)'
        />
      </svg>
  )
}

export default Logo