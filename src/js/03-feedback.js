import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const items = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('[name="message"]'),
  input: document.querySelector('[name="email"]'),
};

const dataForm = {};

items.form.addEventListener('submit', onFormSubmit);
items.form.addEventListener('input', throttle(onInput, 500));

onReload();

function onInput(event) {
dataForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

  function onReload() {
 const savedData = localStorage.getItem(STORAGE_KEY);
   if (savedData) {
    //  console.log(savedData);
    const parsedData = JSON.parse(savedData);
    // console.log(parsedData);
   items.input.value = parsedData.email;
   items.textarea.value = parsedData.message;
}
  }

function onFormSubmit(event) {
  event.preventDefault();
  if (items.input.value === '' || items.textarea.value === '') {
    return alert(`Please fill in all the fields`);
  } else {
    localStorage.removeItem(STORAGE_KEY);
    dataForm.email = items.input.value;
        dataForm.message = items.textarea.value;
    event.currentTarget.reset();
    console.log(dataForm);
  }

//  event.preventDefault();
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//   items.form.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

//   event.preventDefault();
//     dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     items.form.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     console.log(dataForm);
// }
}



