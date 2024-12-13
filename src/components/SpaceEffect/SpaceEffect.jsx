import React, { useRef, useEffect } from 'react';
import styles from './SpaceEffect.module.css'
import star from './star.png'
import moon from './moon.png'
import planet from './planet.png'
import comet from './comet.png'

const SpaceEffect = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const parent = canvas.parentElement;
    
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const emojiNumber = 150;
    const starimg = new Image();
    const moonimg = new Image();
    const planetimg = new Image();
    const cometimg = new Image();

    starimg.src = star;
    moonimg.src = moon;
    planetimg.src = planet;
    cometimg.src = comet
    var emojis = []

    function getRandomType(){
      const img = new Image();
      const id = Math.random()
      if (id < 0.5){
        return starimg;
      }else if(id < 0.75){
        return moonimg
      }else{
        return planetimg
      }
    }
    

    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function remap(value, istart, istop, ostart, ostop){
      value = Number(value);
      istart = Number(istart);
      istop = Number(istop);
      ostart = Number(ostart);
      ostop = Number(ostop);
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }

    class Emoji {
      constructor() {
        this.x = randInt(-centerX, -centerX);
        this.y = randInt(-centerY, centerY);

        this.radius = 10 + Math.random() * 20
        this.angle = Math.random() * Math.PI * 2; // Random initial angle
        this.rotationSpeed = Math.random() * 0.05;

        this.counter = randInt(1, canvas.width);

        this.radiusMax = randInt(1,100);
        this.speed = randInt(1,5);

        this.context = context
        
        this.img = getRandomType();
      }

      drawEmoji() {

        this.counter -= this.speed;
        if (this.counter < 1) {
          this.counter = canvas.width
          this.x = randInt(-centerX, centerX);
          this.y = randInt(-centerY, centerY);

          this.radiusMax = randInt(10,100);
          this.speed = randInt(5,15)
        }

        this.angle += this.rotationSpeed; // Increment angle for rotation

        
        let xRatio = this.x / this.counter;
        let yRatio = this.y / this.counter;

        let starX = remap(xRatio, 0, 1, 0, canvas.width)
        let starY = remap(yRatio, 0, 1, 0, canvas.height)

        this.radius = remap(this.counter, 0, canvas.width, this.radiusMax, 0)
        context.save();
        context.translate(starX + this.radius / 2, starY + this.radius / 2);

        context.rotate(this.angle);
      
        context.drawImage(
          this.img,
          -this.radius/2,
          -this.radius/2,
          this.radius,
          this.radius
        );
        context.restore();
      }
    }
    

    function setup() {
      for (let i = 0; i < emojiNumber; i++){
        emojis.push(new Emoji());
      }
    }

    function draw() {
      context.clearRect(0,0,canvas.width, canvas.height);
      context.fillStyle = "#111";
      context.fillRect(0,0,canvas.width, canvas.height)
      context.translate(centerX, centerY);
      for (let i = 0; i < emojis.length; i++){
        emojis[i].drawEmoji();
      }
      context.translate(-centerX, -centerY)

      requestAnimationFrame(draw);

    }
    starimg.onload = () => {
      setup();
      draw();
    };

  }, []);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
      ></canvas>
    </div>
  );
};

export default SpaceEffect;
