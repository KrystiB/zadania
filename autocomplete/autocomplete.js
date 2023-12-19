class Autocomplete {
    constructor(availableKeywords, inputBoxSelector, resultBoxSelector) {
        this.availableKeywords = availableKeywords;
        this.inputBox = document.querySelector(inputBoxSelector);
        this.resultBox = document.querySelector(resultBoxSelector);
        this.listeners = {
            close: [],
            open: [],
            selected: []
        }

        this.inputBox.addEventListener('input', this.handleInput.bind(this));
        this.inputBox.addEventListener('keydown', this.handleInput.bind(this));
    }

    display(result) {
        const content = result.map((keyword) => {
            return `<li onclick="autocomplete.selectInput(this)">${keyword}</li>`;
        });

        this.resultBox.innerHTML = '<ul>' + content.join('') + '</ul>';
        this.fireEvent('open');
    }

    handleInput() {
        let result = [];
        let input = this.inputBox.value;
        
        if (input.length) {
            result = this.availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }

        this.display(result);

        if (!result.length) {
            this.fireEvent('close');
        }
    }

    selectInput(list) {
        this.inputBox.value = list.innerText;
        this.resultBox.innerHTML = '';
        this.fireEvent('selected');
    }

    addEventListener(event, callback){
        if(this.listeners[event]) {
            this.listeners[event].push(callback);
        }
    }

    fireEvent(event){
        if(this.listeners[event]) {
            this.listeners[event].forEach((callback) => {
                callback();
            });
        }
    }
}

const autocomplete = new Autocomplete(
    ['Apple', 'Banan', 'Cherry', 'Date', 'Fig', 'Grape', 'Lemon', 'Orange', 'Pineapple'],
    '#input-box',
    '.result-box'
);

autocomplete.addEventListener('close', () => console.log('Autocomplete closed'));
autocomplete.addEventListener('open', () => console.log('Autocomplete opened'));
autocomplete.addEventListener('selected', () => console.log('Option selected'));
