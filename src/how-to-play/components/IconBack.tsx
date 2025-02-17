const IconBack = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <g filter="url(#filter0_i_51_245)">
        <rect
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_51_245)"
        />
      </g>
      <path
        d="M11.4894 17.4464L19.5833 9.36133V14.5717C22.7009 14.5717 28.9362 16.7637 28.9362 25.5315C28.9362 20.7883 22.7009 19.842 19.5833 19.9618V25.5315L11.4894 17.4464Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_i_51_245"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_51_245"
          />
          <feOffset dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.616642 0 0 0 0 0.176458 0 0 0 0 0.9625 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_51_245"
          />
        </filter>
        <linearGradient
          id="paint0_linear_51_245"
          x1="20"
          y1="6.56716"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FE71FE" />
          <stop offset="1" stop-color="#7199FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconBack;
