'use client';
import React, {useRef} from 'react';
import p5Types from 'p5';
import Sketch from 'react-p5';

type Props = {
  text: string;
  i: number;
};

const KineticType = ({ text, i }: Props) => {
  // const mousePosition = useMousePosition()
  const pg = useRef<p5Types.Graphics | null>(null);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth , window.innerHeight / 10).parent(
      canvasParentRef
    );
    p5.frameRate(30);
    pg.current = p5.createGraphics(window.innerWidth , window.innerHeight / 10);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth , window.innerHeight / 10);
    pg.current = p5.createGraphics(window.innerWidth , window.innerHeight / 10);
  };

  const draw = (p5: p5Types) => {
    pg.current?.background(0, 0, 0);
    // const colorArray = getColorAtStep(p5.frameCount / 2, i);
    // pg.current?.fill(colorArray[0], colorArray[1], colorArray[2]);
    pg.current?.fill(255)
    pg.current?.textFont('Roman');
    pg.current?.textSize(window.innerWidth / 24);
    pg.current?.push();
    pg.current?.textAlign(p5.CENTER, p5.CENTER);
    // pg.current?.textLeading(600);
    pg.current?.text(text, p5.width / 2, p5.height / 2);
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

        p5.image(pg.current ? pg.current : new p5Types.Element(), sx, sy, sw, sh, dx, dy, dw, dh);
      }
    }
    pg.current?.clear();
  };

  return (
    <div
      className='mix-blend-screen'
    >
      <Sketch setup={setup} draw={draw}  windowResized={windowResized} />
    </div>
  );
};

export default KineticType;
