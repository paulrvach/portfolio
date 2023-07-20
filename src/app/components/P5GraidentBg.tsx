'use client';
import React, { FC, useRef, useLayoutEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';


interface Props {}

const GradientBackground: FC<Props> = () => {

  let gradientStart: p5Types.Color;
  let gradientEnd: p5Types.Color;
  let t: number = 0;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(400, 600).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    t += 0.01;
    gradientStart = p5.color(
      p5.noise(t) * 255,
      p5.noise(t + 10) * 255,
      p5.noise(t + 20) * 255
    );
    gradientEnd = p5.color(
      p5.noise(t + 30) * 255,
      p5.noise(t + 40) * 255,
      p5.noise(t + 50) * 255
    );

    setGradient(
      p5,
      0,
      0,
      p5.width,
      p5.height,
      gradientStart,
      gradientEnd,
      'Y_AXIS'
    );
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const setGradient = (
    p5: p5Types,
    x: number,
    y: number,
    w: number,
    h: number,
    c1: p5Types.Color,
    c2: p5Types.Color,
    axis: string
  ) => {
    p5.noFill();

    if (axis === 'Y_AXIS') {
      for (let i = y; i <= y + h; i++) {
        let inter = p5.map(i, y, y + h, 0, 1);
        let c = p5.lerpColor(c1, c2, inter);
        p5.stroke(c);
        p5.line(x, i, x + w, i);
      }
    }
  };

  

  return (
    <div
      style={{ position: 'fixed', top: '15%', left: '40%', zIndex: -1 }}
      data-scroll
      data-scroll-speed='0.1'
      className='saturate-[1.8] '
      
    >
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
      
    </div>
  );
};

export default GradientBackground;
