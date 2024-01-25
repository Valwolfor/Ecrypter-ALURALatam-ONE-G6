/*
Validate the correct format text and encrypt the text.
 */
const replacements = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const invertedReplacements = {};

function validateAndConvertToLowercase(textarea) {

    let currentText = textarea.value.toLowerCase();
    /*
        /: Delimiters indicating the start and end of the regular expression.
    [^a-zA-Z0-9]: The ^ character inside square brackets [] denotes negation, meaning it should match any character NOT included in the specified range.
    a-zA-Z0-9: This is the range of allowed characters. a-z represents lowercase letters, A-Z represents uppercase letters, and 0-9 represents numeric digits.
    /g: The g flag signifies global matching, implying that all matches throughout the string should be removed, not just the first one.
     */
    var cleanText = currentText.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
    //Send the reformatted text to the textarea object retrieved with getElementsById.
    textarea.value = cleanText;
}

function encryptText(text) {

    // Use a regular expression to match any of the specified letters globally and perform replacements. The other letters stay in the same order.
    var encryptedText = text.replace(/[eiaou]/g, match => replacements[match] || match);
    returnResult(encryptedText);
}

function decryptText(text) {
    for (const key in replacements) {
        invertedReplacements[replacements[key]] = key;
    }

    var decryptedText = text.replace(/(enter|imes|ai|ober|ufat)/g, match => invertedReplacements[match] || match);
    returnResult(decryptedText);

}

function returnResult(text) {
    var field = document.getElementById("output_text");
    document.getElementById("btn_copy_text").style.display = "inline-block";

    field.textContent = text;
}

function copyText() {
    let copyText = document.getElementById("output_text").textContent;

    //Use the api of Clipboard.
    navigator.clipboard.writeText(copyText)
        .then(
     //Nothing for now
            );

    document.getElementById("btn_copy_text").style.display = "none";
}


