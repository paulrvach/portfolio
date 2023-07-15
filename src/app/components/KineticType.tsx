'use client';
import React, { useEffect, useRef } from 'react';
import p5Types from 'p5';
import getColorAtStep from '@/utils/getColorAtStep';
import dynamic from 'next/dynamic';
const Sketch = dynamic(() => import('react-p5'), { ssr: false });
// import useMousePosition from '../../utils/mouse-position'

type Props = {
  text: string;
  i: number
};

const KineticType = ({ text, i }: Props) => {
  // const mousePosition = useMousePosition()
  const canvasSize = 600;
  const grSize = canvasSize;
  let pg: p5Types.Graphics;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth / 1.1, p5.windowHeight / 8).parent(
      canvasParentRef
    );
    p5.frameRate(30);
    pg = p5.createGraphics(p5.windowWidth / 1.1, p5.windowHeight / 8);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth / 1.1, p5.windowHeight / 8);
    pg = p5.createGraphics(p5.windowWidth / 1.1, p5.windowHeight / 8);
  };

  const draw = (p5: p5Types) => {
    pg.background(8, 9, 8);
    const colorArray = getColorAtStep(p5.frameCount / 2, i);
    pg.fill(colorArray[0], colorArray[1], colorArray[2]);
    pg.textFont('Helvetica');
    pg.textSize(pg.windowWidth / 13);
    pg.push();
    pg.textAlign(p5.LEFT, p5.TOP);
    // pg.textLeading(600);
    pg.text(text, 50, 0);
    pg.textStyle('bold')
    pg.pop();

    let tilesX = 5;
    let tilesY = 10;
    let tileW = Math.floor(p5.width / tilesX);
    let tileH = Math.floor(p5.height / tilesY);

    for (let y = 0; y < tilesY; y++) {
      for (let x = 0; x < tilesX; x++) {
        let wave = Math.floor(Math.sin(p5.frameCount * (x + y) * 0.01) * 10);
        // source
        // let rando = Math.floor(Math.random() * 201) - 100;

        // destination
        let dx = x * tileW;
        let dy = y * tileH;
        let dw = tileW;
        let dh = tileH;

        let sx = x * tileW + wave * (p5.mouseY / 100);
        let sy = y * tileH;
        let sw = tileW;
        let sh = tileH;

        p5.image(pg, sx, sy, sw, sh, dx, dy, dw, dh);
      }
    }
    pg.clear();
  };

  return (
    <div className='bg-blend-multiply'>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default KineticType;
