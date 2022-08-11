const canvas = document.getElementById("primary-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Dynamically resize canvas element
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw a red rectangle
ctx.fillStyle = '#ff0000';
ctx.fillRect(50, 50, 200, 100);