/*
Validate the correct format text and encrypt the text.
 */
function validateAndConvertToLowercase(textarea) {

    let currentText = textarea.value.toLowerCase();
    /*
        /: Delimiters indicating the start and end of the regular expression.
    [^a-zA-Z0-9]: The ^ character inside square brackets [] denotes negation, meaning it should match any character NOT included in the specified range.
    a-zA-Z0-9: This is the range of allowed characters. a-z represents lowercase letters, A-Z represents uppercase letters, and 0-9 represents numeric digits.
    /g: The g flag signifies global matching, implying that all matches throughout the string should be removed, not just the first one.
     */
    var cleanText = currentText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    //Send the reformatted text to the textarea object retrieved with getElementsById.
    textarea.value = cleanText;
}

function encryptText(text) {

}


