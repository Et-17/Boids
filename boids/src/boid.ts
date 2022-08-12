export type boid = {
    // Both of these are [x, y] coord-tuples
    pos: [number, number],
    vel: [number, number],
}

export function move(cur: boid): boid {
    return {
        pos: [cur.pos[0] + cur.vel[0], cur.pos[1] + cur.vel[1]],
        vel: cur.vel
    }
}
