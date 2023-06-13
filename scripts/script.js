const COLOR_NAME_INPUT_ELEMENT = document.querySelector('.color-name-input');
const COLOR_CODE_INPUT_ELEMENT = document.querySelector('.color-code-input');
const GENERATION_RESULT_TEXTAREA_ELEMENT = document.querySelector('.generation-result-textarea');
const GENEREATE_BUTTON_ELEMENT = document.querySelector('.generate-button');
const ADD_COLOR_BUTTON_ELEMENT = document.querySelector('.add-color-button');
const FORM_ROW_GROUP_TEMPLATE = document.querySelector('#formRowGroupTemplate').content.querySelector('.color-row');
const FORM_ROW_GROUP_FRAGMENT = document.createDocumentFragment();
const COLORS_CONTAINER = document.querySelector('.colors-list');

const generateResult = (evt) => {
    evt.preventDefault();
    const result = `<Color x:Key="${COLOR_NAME_INPUT_ELEMENT.value}Color">${COLOR_CODE_INPUT_ELEMENT.value}</Color>\n<SolidColorBrush x:Key="${COLOR_NAME_INPUT_ELEMENT.value}Brush" Color="{ StaticResource ${COLOR_NAME_INPUT_ELEMENT.value}Color}" />`;
    console.log(result);
    GENERATION_RESULT_TEXTAREA_ELEMENT.textContent = result;
};

const addColorTemplate = (evt) => {
    evt.preventDefault();
    const colorElement = FORM_ROW_GROUP_TEMPLATE.cloneNode(true);
    FORM_ROW_GROUP_FRAGMENT.appendChild(colorElement);
    COLORS_CONTAINER.appendChild(FORM_ROW_GROUP_FRAGMENT);
}

GENEREATE_BUTTON_ELEMENT.addEventListener('click', generateResult);
ADD_COLOR_BUTTON_ELEMENT.addEventListener('click', addColorTemplate);
