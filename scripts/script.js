let colorNameInputElements = document.querySelectorAll('.color-name-input');
let colorCodeInputElements = document.querySelectorAll('.color-code-input');
let removeColorButtons = document.querySelectorAll('.remove-color-button');
const GENERATION_RESULT_TEXTAREA_ELEMENT = document.querySelector('.generation-result-textarea');
const GENEREATE_BUTTON_ELEMENT = document.querySelector('.generate-button');
const ADD_COLOR_BUTTON_ELEMENT = document.querySelector('.add-color-button');
const FORM_ROW_GROUP_TEMPLATE = document.querySelector('#formRowGroupTemplate').content.querySelector('.color-row');
const FORM_ROW_GROUP_FRAGMENT = document.createDocumentFragment();
const COLORS_CONTAINER = document.querySelector('.colors-list');

const generateResult = (evt) => {
    evt.preventDefault();
    const colors = [];
    const brushes = [];
    for(let i = 0;i < colorNameInputElements.length;i++) {
        colors.push(`<Color x:Key="${colorNameInputElements[i].value}Color">${colorCodeInputElements[i].value}</Color>`)
    };
    for(let i = 0;i < colorCodeInputElements.length;i++) {
        brushes.push(`<SolidColorBrush x:Key="${colorNameInputElements[i].value}Brush" Color="{ StaticResource ${colorNameInputElements[i].value}Color }" />`)
    };
    GENERATION_RESULT_TEXTAREA_ELEMENT.textContent = `${colors.join(`\n`)}\n\n${brushes.join(`\n`)}`;
};

const addColorTemplate = (evt) => {
    evt.preventDefault();
    const colorElement = FORM_ROW_GROUP_TEMPLATE.cloneNode(true);
    FORM_ROW_GROUP_FRAGMENT.appendChild(colorElement);
    COLORS_CONTAINER.appendChild(FORM_ROW_GROUP_FRAGMENT);
    updateElements();
}

function removeColor (evt) {
    evt.preventDefault();
    COLORS_CONTAINER.removeChild(this.parentElement);
    updateElements();
}

const updateElements = () => {
    colorNameInputElements = document.querySelectorAll('.color-name-input');
    colorCodeInputElements = document.querySelectorAll('.color-code-input');
    removeColorButtons = document.querySelectorAll('.remove-color-button');
    removeColorButtons.forEach(button => button.addEventListener('click', removeColor));
}

removeColorButtons.forEach(button => button.addEventListener('click', removeColor));
GENEREATE_BUTTON_ELEMENT.addEventListener('click', generateResult);
ADD_COLOR_BUTTON_ELEMENT.addEventListener('click', addColorTemplate);
