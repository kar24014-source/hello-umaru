let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // Add dark class to body
        document.body.classList.add('dark');
        // Change logo to dark version
        logo.src = 'byui-logo-dark.png';
    } else {
        // Remove dark class from body
        document.body.classList.remove('dark');
        // Change logo to light version
        logo.src = 'byui-logo.png';
    }
}