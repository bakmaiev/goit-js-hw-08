import throttle from 'lodash.throttle';

let dataForm = {};
const KEY_LOCAL_STORAGE = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');

fillForm();

const handleFormInput = e => {
    dataForm[e.target.name] = e.target.value.trim();
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(dataForm))
}
formEl.addEventListener('input', throttle(handleFormInput, 500));

const handleFormSubmit = e => {
    if (!dataForm.email || !dataForm.message) {
        e.preventDefault();
        alert("Заповніть всі поля!");
        return;
    };
    e.preventDefault();
    localStorage.removeItem(KEY_LOCAL_STORAGE);
    console.log(dataForm);
    formEl.reset();
    dataForm = {};
}
formEl.addEventListener('submit', handleFormSubmit);

function fillForm() {
    if (localStorage.getItem(KEY_LOCAL_STORAGE)) {
        dataForm = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
        for (const key in dataForm) {
            formEl.elements[key].value = dataForm[key];
        }
     };
};