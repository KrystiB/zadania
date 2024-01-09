class Tabs {
    container;
    config;
    constructor(container, config) {
        this.container = container;
        this.config = config;

        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="tabs-container">
                <div class="tab-buttons">
                    ${this.config
                        .map(
                            (tab, index) =>
                                `<button class="tab-btn ${
                                    index === 0 ? 'active' : ''
                                }" data-index="${index}">${tab.label}</button>`
                        )
                        .join('')}
                </div>
                <div class="tab-content">
                    ${this.config[0].content}
                </div>
            </div>
        `;

        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContent = document.querySelector('.tab-content');

        tabButtons.forEach((button) => {
            button.addEventListener('click', () => {
                tabButtons.forEach((b) => b.classList.remove('active'));
                button.classList.add('active');

                const index = button.dataset.index;
                tabContent.innerHTML = this.config[index].content;
            });
        });
    }
}

const tabsData = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
];

const tabsContainer = document.getElementById('tabs-container');
const tabsComponent = new Tabs(tabsContainer, tabsData);
