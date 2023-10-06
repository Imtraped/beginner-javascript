const textarea = document.querySelector('[name = "text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name = "filter"]');

function transformText(text) {
    // Take the text, and loop over each letter.
    const mod = Array.from(text).map(filters.sarcastic);
    console.log(mod);
    result.textContent = 'Transformed Text';
}

const filters = {
    sarcastic(letter, index) {
        console.log(letter, index);
        return letter;
    },
    funky() {},
    unable() {}
}

textarea.addEventListener('input', e => transformText(e.target.value));