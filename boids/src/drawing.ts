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

function prepOffscreenCanvas(): HTMLCanvasElement {
    let canvas = document.createElement("canvas");
    canvas.width = canvas.height = BOID_RADIUS * 2;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = BOID_COLOR;
    ctx.arc(BOID_RADIUS, BOID_RADIUS, BOID_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    return canvas;
}

function drawBoid(bd: boid, ctx: CanvasRenderingContext2D, offscreen: HTMLCanvasElement) {
    // ctx.arc(bd.pos[0], bd.pos[1], BOID_RADIUS, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.drawImage(offscreen, bd.pos[0], bd.pos[1]);
}

export function drawBoids(boids: boid[], ctx: CanvasRenderingContext2D, offscreen: HTMLCanvasElement) {
    ctx.canvas.width = ctx.canvas.width;
    ctx.fillStyle = BOID_COLOR;
    boids.forEach(bd => drawBoid(bd, ctx, offscreen));
}

export function doFrames(boids: boid[], fps: number, ctx: CanvasRenderingContext2D) {
    let offscreen = prepOffscreenCanvas();
    let currentBoids = boids;
    setInterval(() => {
        currentBoids = moveBoids(currentBoids, fps, innerWidth, innerHeight);
        drawBoids(currentBoids, ctx, offscreen);
    }, 1000 / fps);
}
