
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
    { r: 199, g: 210, b: 254 },
    { r: 254, g: 202, b: 202 },
    { r: 254, g: 249, b: 195 },
  ];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}