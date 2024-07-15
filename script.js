
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.toggle-image');
    const resetButton = document.getElementById('reset-button');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.add('hidden');
        });
    });

    resetButton.addEventListener('click', () => {
        images.forEach(image => {
            image.classList.remove('hidden');
        });
    });
});

