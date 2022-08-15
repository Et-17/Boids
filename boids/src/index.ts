import { boid, moveBoids, genFlock, randomBoid } from "./boid"
import { getCanvas, doFrames } from "./drawing";

//--------------------------------------------------------------------\\
//  Canvas Test  -----------------------------------------------------\\
//--------------------------------------------------------------------\\

const canvas = getCanvas('primary-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Dynamically resize canvas element
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 1;

// // Draw a red circle
// ctx.fillStyle = "#ff0000";
// drawBoids([{ pos: [100, 100], vel: [10, 10] }], ctx);

//--------------------------------------------------------------------\\
//  Boid Interface Test  ---------------------------------------------\\
//--------------------------------------------------------------------\\

const test: boid = randomBoid(window.innerWidth, innerHeight);
console.log(test);
console.log(moveBoids([test], 30));

//--------------------------------------------------------------------\\
//  Boid Update and FPS Test  ----------------------------------------\\
//--------------------------------------------------------------------\\

ctx.beginPath();
const initial: boid[] = genFlock(window.innerWidth, window.innerHeight, 10);
console.log(genFlock(window.innerWidth, window.innerHeight, 10));
doFrames(initial, 30, ctx);
