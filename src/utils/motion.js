
function fadeUp(duration, delay, x, y) {
  return {
    hidden: {
      opacity: 0,
      x: x,
      y: y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };
}

export default fadeUp;