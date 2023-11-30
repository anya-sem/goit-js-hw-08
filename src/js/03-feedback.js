import throttle from 'lodash.throttle';

const items = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('[name="message"]'),
  input: document.querySelector('[name="email"]'),
};

items.form.addEventListener('submit', onFormSubmit);
items.form.addEventListener('input', throttle(onInput, 500));

const dataForm = {};

function onInput(event) {
dataForm.email = items.input.value;
  dataForm.message = items.textarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  items.input.value = savedData.email;
  items.textarea.value = savedData.message;
}

// function onReload() {
//  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
//    if (savedData) {
//   items.input.value = savedData.email;
//   items.textarea.value = savedData.message;
// }
// }

function onFormSubmit(event) {
  event.preventDefault();
  console.log(dataForm);
  items.form.reset();
  localStorage.removeItem('feedback-form-state');
}


