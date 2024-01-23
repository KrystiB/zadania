import colorNames from './colors.js';

const search = document.querySelector('#search');
const colorList = document.querySelector('#colorList');

const createColorList = () => {
    colorNames.forEach((color) => {
        const li = document.createElement('li');
        li.textContent = color;
        li.addEventListener('click', () => {
            search.value = color;
            colorList.textContent = '';
        });
        colorList.appendChild(li);
    });
};

search.addEventListener('input', () => {
    const searchText = search.value.toLowerCase();
    const filteredColors = colorNames.filter((color) =>
        color.toLowerCase().includes(searchText)
    );

    colorList.textContent = '';

    filteredColors.forEach((color) => {
        const li = document.createElement('li');
        li.textContent = color;
        li.addEventListener('click', () => {
            search.value = color;
            colorList.textContent = '';
        });
        colorList.appendChild(li);
    });
});

createColorList();
