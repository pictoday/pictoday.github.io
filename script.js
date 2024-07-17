
// document.addEventListener('DOMContentLoaded', function() {
//     const images = document.querySelectorAll('.toggle-image');
//     const resetButton = document.getElementById('reset-button');

//     images.forEach(image => {
//         image.addEventListener('click', () => {
//             image.classList.add('hidden');
//         });
//     });

//     resetButton.addEventListener('click', () => {
//         images.forEach(image => {
//             image.classList.remove('hidden');
//         });
//     });
// });

//----------------------------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     const images = document.querySelectorAll('.toggle-image');
//     const resetButton = document.getElementById('reset-button');

//     images.forEach(image => {
//         image.addEventListener('click', () => {
//             image.classList.add('hidden');
//         });
//     });

//     resetButton.addEventListener('click', () => {
//         images.forEach(image => {
//             image.classList.remove('hidden');
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM fully loaded and parsed');
//     const images = document.querySelectorAll('.toggle-image');
//     const resetButton = document.getElementById('reset-button');

//     images.forEach(image => {
//         console.log('Adding click listener to image', image);
//         image.addEventListener('click', () => {
//             console.log('Image clicked', image);
//             image.classList.toggle('hidden');
//         });
//     });

//     if (resetButton) {
//         console.log('Adding click listener to reset button');
//         resetButton.addEventListener('click', () => {
//             console.log('Reset button clicked');
//             images.forEach(image => {
//                 image.classList.remove('hidden');
//             });
//         });
//     } else {
//         console.log('Reset button not found');
//     }
// });

//-----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.toggle-image');
    const resetButton = document.getElementById('reset-button');

    if (images.length > 0) {
        images.forEach(image => {
            image.addEventListener('click', () => {
                image.style.opacity = 0.5;
            });
        });
    }
    

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            images.forEach(image => {
                image.style.opacity = 1;
            });
        });
    }
});

//-------------------------re click sur image pour activer----------------------------------------------------------

