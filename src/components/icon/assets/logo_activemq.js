import React from 'react';

const EuiIconLogoActivemq = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 128 128">
    <defs>
      <filter id="a" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity=".498" floodColor="#000" result="flood" />
        <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1" />
        <feGaussianBlur in="composite1" stdDeviation=".2" result="blur" />
        <feOffset dx="1" dy="1" result="offset" />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
    </defs>
    <g filter="url(#a)" fill="#fff" transform="matrix(2.8 0 0 2.8 -90 -305)">
      <path d="M64.697 153.552l-8.352-.05-4.133-7.257 4.218-7.208 8.352.049 4.134 7.257z" />
      <path d="M52.632 146.553l-8.352-.049-4.133-7.257 4.218-7.209 8.352.05 4.134 7.257z" />
      <path d="M64.771 139.589l-8.352-.05-4.133-7.257 4.218-7.208 8.352.05 4.134 7.257z" />
      <path d="M64.765 125.702l-8.351-.049-4.134-7.257 4.219-7.209 8.352.05 4.133 7.257z" />
      <path d="M52.696 132.676l-8.352-.049-4.133-7.257 4.218-7.209 8.352.05 4.133 7.257z" />
    </g>
    <g transform="matrix(2.8 0 0 2.8 -90 -305)">
      <path d="M64.266 138.661l-7.296-.022-3.628-6.33L57.009 126l7.297.023 3.628 6.33z" fill="#c12766" />
      <path d="M52.127 145.626l-7.296-.023-3.628-6.33 3.667-6.307 7.296.022 3.629 6.33z" fill="#3e489f" />
      <path d="M64.19 152.624l-7.295-.023-3.629-6.33 3.668-6.307 7.296.023 3.629 6.33z" fill="#714099" />
      <path d="M52.191 131.749l-7.296-.023-3.629-6.33 3.668-6.307 7.296.022 3.629 6.33z" fill="#78932c" />
      <path d="M64.26 124.775l-7.296-.023-3.628-6.33 3.668-6.307 7.296.022 3.628 6.33z" fill="#cf242a" />
      <circle cy="146.294" cx="60.564" r="1.6" fill="#fff" />
      <path d="M61.748 117.71l-14.267 8.174M48.514 124.197l.048 16.442M47.525 138.715l14.136 8.397M60.59 117.133l.048 16.442M60.657 131.093l.048 16.442M61.766 131.708l-14.267 8.174M47.564 124.84l14.136 8.398" fill="none" stroke="#fff" strokeWidth=".524" />
      <circle cy="139.242" cx="48.334" r="1.6" fill="#fff" />
      <circle cy="132.486" cx="60.901" r="1.6" fill="#fff" />
      <circle cy="125.419" cx="48.563" r="1.6" fill="#fff" />
      <circle cy="118.445" cx="60.632" r="1.6" fill="#fff" />
    </g>
  </svg>
);

export const icon = EuiIconLogoActivemq;
