export default function getColorAtStep(t: number) {
  // Define the start and end colors in RGB
  const startColor = { r: 102, g: 0, b: 204 }; // Deep purple
  const endColor = { r: 173, g: 216, b: 230 }; // Light blue

  // Use the cosine function to create a cyclical effect
  const cycle = (Math.cos(t / 15) + 1) / 2; // This will cycle between 0 and 1

  // Function to calculate the interpolated color for the current step
  const interpolateColor = (cycle: number) => ({
    r: Math.round(startColor.r + (endColor.r - startColor.r) * cycle),
    g: Math.round(startColor.g + (endColor.g - startColor.g) * cycle),
    b: Math.round(startColor.b + (endColor.b - startColor.b) * cycle),
  });

  // Return the interpolated color for the current step
  return [
    interpolateColor(cycle).r,
    interpolateColor(cycle).g,
    interpolateColor(cycle).b,
  ];
}
