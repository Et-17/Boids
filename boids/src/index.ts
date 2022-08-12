import { boid, move } from "./boid"

//--------------------------------------------------------------------\\
//  Canvas Test  -----------------------------------------------------\\
//--------------------------------------------------------------------\\

const canvas = document.getElementById("primary-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Dynamically resize canvas element
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw a red rectangle
ctx.fillStyle = '#ff0000';
ctx.fillRect(50, 50, 200, 100);

//--------------------------------------------------------------------\\
//  Boid Interface Test ----------------------------------------------\\
//--------------------------------------------------------------------\\

const test: boid = { pos: [5, 10], vel: [2, 1] };
console.log(test);
console.log(move(test));
