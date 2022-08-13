import { boid, BOID_RADIUS, BOID_COLOR, moveBoids } from "./boid"

export function getCanvas(id: string): HTMLCanvasElement | null {
    let canvas = document.getElementById(id);

    if (canvas instanceof HTMLElement) {
        if (!(canvas instanceof HTMLCanvasElement)) {
            console.error(`No canvas with id ${id} found`);
            return null;
        }
    } else {
        console.error(`No element with id ${id} found`);
        return null;
    }

    if (canvas.getContext === null) {
        console.error("Browser not compatible with canvas");
        return null;
    } else {
        return canvas;
    }
}

function drawBoid(bd: boid, ctx: CanvasRenderingContext2D) {
    ctx.arc(bd.pos[0], bd.pos[1], BOID_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

export function drawBoids(boids: boid[], ctx: CanvasRenderingContext2D) {
    ctx.canvas.width = ctx.canvas.width;
    ctx.fillStyle = BOID_COLOR;
    boids.forEach(bd => drawBoid(bd, ctx));
}

export function doFrames(boids: boid[], fps: number, ctx: CanvasRenderingContext2D) {
    let currentBoids = boids;
    setInterval(() => {
        currentBoids = moveBoids(currentBoids, fps);
        drawBoids(currentBoids, ctx);
    }, 1000 / fps);
}
