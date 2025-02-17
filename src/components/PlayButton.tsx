const PlayButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
    >
      <g filter="url(#filter0_ii_51_167)">
        <rect
          width="160"
          height="160"
          rx="80"
          fill="url(#paint0_linear_51_167)"
        />
      </g>
      <g filter="url(#filter1_i_51_167)">
        <path
          d="M56.3047 81.9178L56.0785 80.4416C54.1257 67.6964 53.1492 61.3238 56.8208 57.857C60.4924 54.3902 66.6481 55.8723 78.9596 58.8366L80.5882 59.2287C97.3933 63.275 105.796 65.2981 107.029 71.2434C108.262 77.1887 101.381 82.5073 87.6211 93.1445L86.2187 94.2286C75.0336 102.875 69.4411 107.198 64.498 105.164C59.5549 103.13 58.4715 96.0591 56.3047 81.9178Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_51_167"
          x="0"
          y="-11"
          width="160"
          height="171"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
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
            radius="11"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_51_167"
          />
          <feOffset dy="-12" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.616642 0 0 0 0 0.176458 0 0 0 0 0.9625 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_51_167"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_51_167"
          />
          <feOffset dy="-4" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.188235 0 0 0 0 0.254902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_51_167"
            result="effect2_innerShadow_51_167"
          />
        </filter>
        <filter
          id="filter1_i_51_167"
          x="54.3396"
          y="55.8496"
          width="52.8302"
          height="49.8115"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
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
          <feOffset dy="-6" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.141176 0 0 0 0 0.188235 0 0 0 0 0.254902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_51_167"
          />
        </filter>
        <linearGradient
          id="paint0_linear_51_167"
          x1="80"
          y1="26.2687"
          x2="80"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FE71FE" />
          <stop
            offset="1"
            stop-color="#7199FF"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlayButton;
