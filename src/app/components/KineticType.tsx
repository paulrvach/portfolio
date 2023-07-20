'use client';
import React, {useRef} from 'react';
import p5Types from 'p5';
import getColorAtStep from '@/utils/getColorAtStep';
import dynamic from 'next/dynamic';
const Sketch = dynamic(() => import('react-p5'), { ssr: false });
// import useMousePosition from '../../utils/mouse-position'

type Props = {
  text: string;
  i: number;
};

const KineticType = ({ text, i }: Props) => {
  // const mousePosition = useMousePosition()
  const pg = useRef<p5Types.Graphics | null>(null);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth / 2, window.innerHeight / 6).parent(
      canvasParentRef
    );
    p5.frameRate(30);
    pg.current = p5.createGraphics(window.innerWidth / 2, window.innerHeight / 6);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth / 2, window.innerHeight / 6);
    pg.current = p5.createGraphics(window.innerWidth / 2, window.innerHeight / 6);
  };

  const draw = (p5: p5Types) => {
    pg.current?.background(0, 0, 0);
    // const colorArray = getColorAtStep(p5.frameCount / 2, i);
    // pg.current?.fill(colorArray[0], colorArray[1], colorArray[2]);
    pg.current?.fill(255)
    pg.current?.textFont('Roman');
    pg.current?.textSize(window.innerWidth / 13);
    pg.current?.push();
    pg.current?.textAlign(p5.LEFT, p5.TOP);
    // pg.current?.textLeading(600);
    pg.current?.text(text, 0, 20);
    pg.current?.textStyle('bold');
    pg.current?.pop();

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

        p5.image(pg.current, sx, sy, sw, sh, dx, dy, dw, dh);
      }
    }
    pg.current?.clear();
  };

  return (
    <div
      data-scroll
      data-scroll-speed='0.3'
      className='mix-blend-screen'
    >
      <Sketch setup={setup} draw={draw}  windowResized={windowResized} />
    </div>
  );
};

export default KineticType;
