export type position = {
    x: number;
    y: number;
    z: number;
};

export const moveBy = async (direction: position, id: number) => {
    const positionChange = await fetch(`localhost:8080/position/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            x: direction.x,
            y: direction.y,
            z: direction.z,
        }),
    });
    const response: Promise<position> = await positionChange.json();

    return response;
};
