import { type HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  color?: string;
}

const Logo = ({
  height = "100",
  width = "100",
  color = "hsl(43.15,100%,65.1%)",
  ...props
}: LogoProps) => {
  return (
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="49.9033"
            cy="32.7102"
            r="19"
            transform="rotate(-90 49.9033 32.7102)"
            stroke={color}
            strokeWidth="3"
          />
          <circle
            cx="49.9033"
            cy="70.7102"
            r="19"
            transform="rotate(-90 49.9033 70.7102)"
            stroke={color}
            strokeWidth="3"
          />
          <circle
            cx="30.9033"
            cy="51.7102"
            r="19"
            transform="rotate(-90 30.9033 51.7102)"
            stroke={color}
            strokeWidth="3"
          />
          <circle
            cx="69.483"
            cy="51.7102"
            r="19"
            transform="rotate(-90 69.483 51.7102)"
            stroke={color}
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_6121_148576"
            x="0"
            y="-2"
            width="100"
            height="100"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_6121_148576"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export { Logo };
