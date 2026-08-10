import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showMobileWarning = true,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), {
    damping: 30,
    stiffness: 100,
    mass: 2,
  });
  const rotateY = useSpring(useMotionValue(0), {
    damping: 30,
    stiffness: 100,
    mass: 2,
  });
  const scale = useSpring(1, {
    damping: 30,
    stiffness: 100,
    mass: 2,
  });

  const [opacity, setOpacity] = useState(0);
  const [rotateFigcaption, setRotateFigcaption] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityX = offsetX;
    const velocityY = offsetY;
    const velocityMagnitude = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    setRotateFigcaption(velocityMagnitude * 0.1 * Math.sign(velocityX));
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setOpacity(1);
  }

  function handleMouseLeave() {
    setOpacity(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setRotateFigcaption(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{ height: containerHeight, width: containerWidth, position: 'relative', perspective: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '0px', // or specific design border radius
            willChange: 'transform'
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="tilted-card-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              transform: 'translateZ(30px)' // giving some 3d depth
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 10,
            background: 'white',
            color: 'black',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '0.875rem'
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
