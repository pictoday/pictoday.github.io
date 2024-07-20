

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.toggle-image');
    const resetButton = document.getElementById('reset-button');

    images.forEach((image, index) => {
        let idx = 0;
        let valide = image.closest('.item').querySelector('.valide01');
        let uniqueId = `hidden-${index}`;

        if (valide) { // Vérifiez si valide existe avant d'ajouter des écouteurs d'événements
            function toggleImage() {
                if (image.id === uniqueId) {
                    image.removeAttribute('id'); // Supprimer l'identifiant 'hidden'
                    image.style.opacity = '1'; // Remettre l'opacité à 1
                } else {
                    image.id = uniqueId; // Ajouter l'identifiant 'hidden'
                    image.style.opacity = '0.2'; // Forcer l'opacité via JavaScript
                }

                if (idx === 0) {
                    // Forcer le redémarrage de l'animation
                    valide.classList.remove('animValide');
                    void valide.offsetWidth; // Force le reflow
                    valide.classList.add('animValide');
                    idx = 1;
                    valide.style.backgroundPosition = 'right';
                } else {
                    // Supprimer l'animation sans la redémarrer
                    valide.classList.remove('animValide');
                    idx = 0;
                    valide.style.backgroundPosition = 'left';
                }
            }

            image.addEventListener('click', toggleImage);

            valide.addEventListener('animationend', () => {
                valide.classList.remove('animValide');
            });
        }
    });

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            images.forEach(image => {
                image.removeAttribute('id'); // Supprimer l'identifiant 'hidden'
                image.style.opacity = '1'; // Remettre l'opacité à 1
                location.reload(); // Reload the page
        

                let valide = image.closest('.item').querySelector('.valide01');
                if (valide) {
                    valide.classList.remove('animValide');
                    valide.style.backgroundPosition = 'left';
                }
                image.dataset.idx = 0;
            });
        });
    }
});


function toggleImage(imgElement) {
        imgElement.classList.toggle('hidden');
    }
    
//--------------------------------------
// let valide = document.querySelector('.valide');
// let idx = 0;

// function toggleImage(imgElement) {
//     imgElement.classList.toggle('hidden');
//     if (idx === 0) {
//         valide.classList.toggle('animValide');
//         idx = 1;
//         valide.style.backgroundPosition = 'right';
//     } else {
//         idx = 0;
//         valide.style.backgroundPosition = 'left';
//     }
// }

// valide.addEventListener('animationend', () => {
//     valide.classList.toggle('animValide');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const images = document.querySelectorAll('.toggle-image');
//     const resetButton = document.getElementById('reset-button');
//     if (resetButton) {
//         resetButton.addEventListener('click', () => {
//             images.forEach(image => {
//                 image.classList.remove('hidden');
//             });
//         });
//     }
// });

//--------------------------- valide ------------------------------------
// function toggleImage(imgElement) {
//     imgElement.classList.toggle('hidden');
// }
// document.addEventListener('DOMContentLoaded', function() {
//     const images = document.querySelectorAll('.toggle-image');
//     const resetButton = document.getElementById('reset-button');
//     if (resetButton) {
//         resetButton.addEventListener('click', () => {
//             images.forEach(image => {
//                 image.classList.remove('hidden');
//             });
//         });
//     }
// });

// const valide = document.querySelector('.valide');

// let idx = 0;
// valide.addEventListener('click', ()=>{
//     if(idx===0){
//         valide.classList.toggle('animValide');
//         idx = 1;
//         valide.style.backgroundPosition = 'right';
//     }
//     else{
//         idx=0;
//         valide.style.backgroundPosition = 'left';
//     }
// });
// valide.addEventListener('animationend', ()=> {
//     valide.classList.toggle('animValide');
// })

