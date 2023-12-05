function counter() {
    const textInput = document.querySelector('.textInput');
    const counterSpan = document.querySelector('.counter');
    const count = textInput.value.length;
    counterSpan.textContent = `${count} ${count === 1 ? 'character' : 'characters'}`;
}