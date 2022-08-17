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

const test: boid = randomBoid(innerWidth, innerHeight, 50);
console.log(test);
console.log(moveBoids([test], 30, innerWidth, innerHeight));

//--------------------------------------------------------------------\\
//  Boid Update and FPS Test  ----------------------------------------\\
//--------------------------------------------------------------------\\

ctx.beginPath();
const initial: boid[] = genFlock(innerWidth, innerHeight, 50, 10);
doFrames(initial, 30, ctx);
