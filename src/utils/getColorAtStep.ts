type RGBColor = {
  r: number;
  g: number;
  b: number;
};

const colors: RGBColor[] = [
  { r: 57, g: 255, b: 20 },
  { r: 255, g: 0, b: 127 },
  { r: 0, g: 216, b: 255 },
  { r: 255, g: 121, b: 0 },
];

function interpolateColor(color1: RGBColor, color2: RGBColor, cycle: number) {
  return {
    r: Math.round(color1.r + (color2.r - color1.r) * cycle),
    g: Math.round(color1.g + (color2.g - color1.g) * cycle),
    b: Math.round(color1.b + (color2.b - color1.b) * cycle),
  };
}

export default function getColorAtStep(t: number, i: number) {
  const index = Math.floor(t / 60) % colors.length;
  const cycle = (Math.cos(t / 60) + 1) / 2;
  const color = interpolateColor(colors[index ], colors[(index + 1 ) % colors.length], cycle);
  return [color.r, color.g, color.b];
}
