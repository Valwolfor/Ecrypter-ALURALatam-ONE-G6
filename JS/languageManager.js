console.log("Antes an tes del fetch")
document.addEventListener('DOMContentLoaded', function () {
    let currentLanguage = "es";

    console.log("Antes del fetch")
    // Fetch the language JSON file.
    fetch('../Resource/languageContent.json')
        .then(response => response.json())
        .then(data => {
            const languageText = data;
            console.log("Despues del fetch")

            // Function to switch language
            function switchLanguage(languageCode) {
                currentLanguage = languageCode;
                updateUI();
            }

            // Function to update the UI with the current language
            function updateUI() {
                // Update other UI elements as needed
                document.getElementById('title_app').textContent = languageText[currentLanguage]['title_app'];
                document.getElementById('input_text').placeholder = languageText[currentLanguage]['placeholder_input'];
                document.getElementById('info_input').textContent = languageText[currentLanguage]['info_input'];
                document.getElementById('btn_encrypter').textContent = languageText[currentLanguage]['btn_encrypter'];
                document.getElementById('btn_decrypter').textContent = languageText[currentLanguage]['btn_decrypter'];
                document.getElementById('output_text').textContent = languageText[currentLanguage]['output_text'];
                document.getElementById('btn_copy_text').textContent = languageText[currentLanguage]['btn_copy_text'];
                document.getElementById('btn_change_language').textContent = languageText[currentLanguage]['btn_change_language'];
            }

            // Initial update
            updateUI();

            // Function to change the language
            window.changeLanguage = function () {
                switchLanguage(currentLanguage === 'es' ? 'en' : 'es');
            };

        }).
            catch(error => console.error('Error fetching language content:', error));
        });
