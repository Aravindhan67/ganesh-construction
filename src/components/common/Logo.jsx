import React from 'react';

const Logo = ({ color = 'currentColor', size = 40, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ minWidth: size, minHeight: size, flexShrink: 0 }}
  >
    {/* Abstract Architectural G */}
    <path 
      d="M24 8H36V16M12 24V12C12 9.79086 13.7909 8 16 8H24M12 24V36C12 38.2091 13.7909 40 16 40H32C34.2091 40 36 38.2091 36 36V28H24" 
      stroke={color} 
      strokeWidth="4" 
      strokeLinecap="square" 
      strokeLinejoin="miter"
    />
    <rect x="22" y="18" width="4" height="10" fill={color} />
  </svg>
);

export default Logo;
