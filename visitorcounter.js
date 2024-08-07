document.addEventListener('DOMContentLoaded', (event) => {
    const counterElement = document.getElementById('visitorCount');

    // Show the welcome pop-up
    if (confirm("Welcome to Story Haven!")) {
        // If the user clicks "OK", increment the visitor count
        fetch('https://api.countapi.xyz/hit/storyhaven/homepage')
            .then(response => response.json())
            .then(data => {
                counterElement.textContent = data.value;
            })
            .catch(error => {
                console.error('Error:', error);
                counterElement.textContent = 'Error';
            });
    } else {
        // If the user clicks "Cancel", do nothing
        counterElement.textContent = 'Visit not counted';
    }

    // Fetch and display the current visitor count
    fetch('https://api.countapi.xyz/get/storyhaven/homepage')
        .then(response => response.json())
        .then(data => {
            counterElement.textContent = data.value;
        })
        .catch(error => {
            console.error('Error:', error);
            counterElement.textContent = 'Error';
        });
});