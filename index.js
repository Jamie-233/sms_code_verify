const form = document.querySelectorAll('[name="verify"]');
const inputs = document.querySelectorAll('.inputs input');

function handleInput(e) {
  // check for data that was inputtted and if there is a next input, focus it
  const input = e.target;
  if(input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
}

function handleDelete(e) {
  const current = e.target;
  // clear current and move to the previous input box
  if(e.keyCode === 8 && current.previousElementSibling) {
    e.preventDefault();
    current.value = '' ;
    current.previousElementSibling.focus();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData('text/plain');
  // loop over each input, and populate with the index of that string
  inputs.forEach((input, i) => {
    input.value = paste[i] || '';
  });
}

form[0].addEventListener('keydown', handleDelete);
form[0].addEventListener('input', handleInput);
inputs[0].addEventListener('paste', handlePaste);

// 1. select the text when the next input is focued
// 2. Auto submit the form if all fields are filled after a paste
// 3. support for backspacing from 1 input to another
