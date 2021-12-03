const scriptURL = 'https://script.google.com/macros/s/AKfycbwZXOZ1hqozKmOwEfDXoufDQ-UBzsE1UFelheaGAyBsUYOhssAODi3hQCjMKc4qY-QA/exec';
const form = document.forms['pendaftaran'];

var btnSubmit   = document.getElementById('btnSubmit');
var btnLoading  = document.getElementById('btnLoading');
var alertDiv    = document.getElementById('alertDiv');
var formDiv     = document.getElementById('formDiv');

form.addEventListener('submit', e => {

    e.preventDefault();
    btnSubmit.classList.add('d-none');
    btnLoading.classList.remove('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alertDiv.classList.remove('d-none');
            formDiv.classList.add('d-none');
            console.log('Success!', response);
        })
    .catch(error => console.error('Error!', error.message))
})