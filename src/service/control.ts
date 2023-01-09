export type position = {
    x: number;
    y: number;
    z: number;
};

export const backward: position = {
    x: 0,
    z: 0,
    y: 1,
};
export const forward: position = {
    x: 0,
    y: -1,
    z: 0,
};
export const left: position = {
    x: -1,
    y: 0,
    z: 0,
};
export const right: position = {
    x: 1,
    y: 0,
    z: 0,
};

export const moveBy = async (direction: position, id: number) => {
    try {
        console.log('attempting to move');
        const positionChange = await fetch(
            `http://localhost:8080/position/${id}`,
            {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(direction),
            }
        );
        console.log('body sent');
        const response: Promise<position> = await positionChange.json();
        console.log('moved');
        return await response;
    } catch (err) {
        throw err;
    }
};

export const getPosition = async (id: number) => {
    try {
        console.log('Retrieving position location');
        const thisPosition = await fetch(
            `http://localhost:8080/position/${id}`,
            {
                method: 'GET',
                // mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        const response = await thisPosition.json();
        return response;
    } catch (err) {
        throw err;
    }
};
