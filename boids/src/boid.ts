// Much of the boid logic is derived from the pseudocode available at
// https://vergenet.net/~conrad/boids/pseudocode.html

export const BOID_RADIUS = 5;
export const BOID_COLOR = "#000000";

export const SEPARATION_RADIUS = 180;

export const COHESION_RADIUS = 600;
export const COHESION_WEIGHT = 0.01;

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
    return boids.map(bd => move(applyRules(boids, bd), fps));
}

export function applyRules(boids: boid[], main: boid): boid {
    return {
        pos: main.pos,
        vel: [
            main.vel,
            cohesion(getNearBoids(boids, main, COHESION_RADIUS), main),
            separation(getNearBoids(boids, main, SEPARATION_RADIUS), main),
        ].reduce(addPos)
    };
}

export function cohesion(boids: boid[], main: boid): [number, number] {
    if (boids.length > 0) {
        return mulPos(
            subPos(
                divPos(
                    boids.map(bd => bd.pos).reduce(addPos),
                    boids.length),
                main.pos
            ),
            COHESION_WEIGHT
        );
    } else { return [0, 0]; }
}

export function separation(boids: boid[], main: boid): [number, number] {
    if (boids.length > 0) {
        return boids
            .map(b => subPos(b.pos, main.pos))
            .reduce((a, b) => subPos(a, b))
    } else { return [0, 0]; }
}

function divPos(a: [number, number], b: number): [number, number] {
    return [a[0] / b, a[1] / b];
}

function mulPos(a: [number, number], b: number): [number, number] {
    return [a[0] * b, a[1] * b];
}

function subPos(a: [number, number], b: [number, number]): [number, number] {
    return [a[0] - b[0], a[1] - b[1]];
}

function addPos(a: [number, number], b: [number, number]): [number, number] {
    return [a[0] + b[0], a[1] + b[1]];
}

export function getNearBoids(boids: boid[], main: boid, range: number): boid[] {
    return boids.filter(bd =>
        bd != main && boidDistance(bd, main) < range * range);
}

export function boidDistance(a: boid, b: boid): number {
    return (a.pos[0] - b.pos[0]) * (a.pos[0] - b.pos[0]) +
        (a.pos[1] + b.pos[1]) * (a.pos[1] + b.pos[1]);
}

export function randomBoid(maxw: number, maxh: number): boid {
    return {
        pos: [Math.random() * maxw, Math.random() * maxh],
        vel: [0, 0]
    }
}

// Typescript arrays are weird so we have to go imperitive
export function genFlock(maxw: number, maxh: number, count: number): boid[] {
    let boids: boid[] = new Array();
    for (let i = 0; i < count; boids[i++] = randomBoid(maxw, maxh));
    return boids;
}
