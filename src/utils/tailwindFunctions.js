export const randomizePosition = () => {
  const randomTop = Math.floor(Math.random() * window.innerHeight);
  const randomLeft = Math.floor(Math.random() * window.innerWidth);

  return {
    top: randomTop,
    left: randomLeft,
  };
};

export function getRandomColorFromGradient() {
  const colors = [
    { r: 134, g: 239, b: 172 },
    { r: 59, g: 130, b: 246 },
    { r: 147, g: 51, b: 234 },
  ];
  // linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
