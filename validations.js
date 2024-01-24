function validateInput(input){
    const errorMessage = document.getElementById('error-message');

    if (!input.checkValidity()) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}