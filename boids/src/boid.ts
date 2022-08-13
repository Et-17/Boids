export const BOID_RADIUS = 10;
export const BOID_COLOR = "#000000";

export type boid = {
    // Both of these are [x, y] coord-tuples
    pos: [number, number],
    vel: [number, number],
}

export function move(cur: boid, fps: number): boid {
    return {
        pos: [cur.pos[0] + (cur.vel[0] / fps), cur.pos[1] + (cur.vel[1] / fps)],
        vel: cur.vel
    }
}

export function moveBoids(boids: boid[], fps: number): boid[] {
    return boids.map(bd => move(bd, fps));
}
