// Get the elements we need
const selectElem = document.getElementById('webdevlist');
const heading = document.querySelector('#content h1');

// Listen for dropdown changes
selectElem.addEventListener('change', function() {
    const value = selectElem.value;

    if (value === 'html') {
        heading.textContent = 'HyperText Markup Language';
    } else if (value === 'css') {
        heading.textContent = 'Cascading Style Sheets';
    } else if (value === 'js') {
        heading.textContent = 'JavaScript';
    } else {
        // Reset to original when "Choose One" is selected
        heading.textContent = 'HTML, CSS, and JS';
    }

    // Optional: helpful for debugging
    console.log('Selected:', value);
});