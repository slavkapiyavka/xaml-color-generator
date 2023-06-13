const COLOR_NAME_INPUT_ELEMENT = document.querySelector('.color-name-input');
const COLOR_CODE_INPUT_ELEMENT = document.querySelector('.color-code-input');
const GENERATION_RESULT_TEXTAREA_ELEMENT = document.querySelector('.generation-result-textarea');
const GENEREATE_BUTTON_ELEMENT = document.querySelector('.generate-button');

function generateResult(evt) {
    evt.preventDefault();
    const result = `<Color x:Key="${COLOR_NAME_INPUT_ELEMENT.value}Color">${COLOR_CODE_INPUT_ELEMENT.value}</Color>\n<SolidColorBrush x:Key="${COLOR_NAME_INPUT_ELEMENT.value}Brush" Color="{ StaticResource ${COLOR_NAME_INPUT_ELEMENT.value}Color}" />`;
    console.log(result);
    GENERATION_RESULT_TEXTAREA_ELEMENT.textContent = result;
};

GENEREATE_BUTTON_ELEMENT.addEventListener('click', generateResult);
