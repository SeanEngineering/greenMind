export const buildSquare = (length: number, height: number) => {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < height; j++) {
            const div = document.createElement('div');
            div.style.width = '20x';
            div.style.height = '20px';
            div.style.backgroundColor = 'white';
            div.style.zIndex = '10';
            // div.style.border = '1px solid black';
            div.id = `${i}:${j}`;
            document.getElementById('homeGrid')?.appendChild(div);
        }
    }
};
