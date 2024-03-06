"use strict";
const colorNames = [
    'Czerwony',
    'Żółty',
    'Zielony',
    'Niebieski',
    'Czarny',
    'Biały',
    'Różowy',
    'Pomarańczowy',
    'Brązowy',
];
const search = document.querySelector('#search');
const colorList = document.querySelector('#colorList');
const createColorList = () => {
    colorNames.forEach((color) => {
        const li = document.createElement('li');
        li.textContent = color;
        li.addEventListener('click', () => {
            if (search)
                search.value = color;
            if (colorList)
                colorList.textContent = '';
        });
        if (colorList)
            colorList.appendChild(li);
    });
};
if (search) {
    search.addEventListener('input', () => {
        const searchText = search.value.toLowerCase();
        const filteredColors = colorNames.filter((color) => color.toLowerCase().includes(searchText));
        if (colorList)
            colorList.textContent = '';
        filteredColors.forEach((color) => {
            const li = document.createElement('li');
            li.textContent = color;
            li.addEventListener('click', () => {
                search.value = color;
                if (colorList)
                    colorList.textContent = '';
            });
            if (colorList)
                colorList.appendChild(li);
        });
    });
}
createColorList();
