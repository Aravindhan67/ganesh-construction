import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
      <style>
        {`
          .shiny-text {
            color: #111313a4;
            background-image: linear-gradient(
              120deg,
              rgba(17, 19, 19, 0) 40%,
              rgba(17, 19, 19, 0.8) 50%,
              rgba(17, 19, 19, 0) 60%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            display: inline-block;
            animation: shine var(--animation-duration, 3s) linear infinite;
          }

          @keyframes shine {
            0% {
              background-position: 100%;
            }
            100% {
              background-position: -100%;
            }
          }

          .shiny-text.disabled {
            animation: none;
          }
        `}
      </style>
    </div>
  );
};

export default ShinyText;
