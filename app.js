const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');
const cube = document.querySelector('.cube');


// topLeft.addEventListener('change', changeBorderRadius('top-left'));

function changeBorderRadius(position) {
    if (position == 'top-left') {
        cube.style.borderTopLeftRadius = `${topLeft.value}%`;
        console.log(topLeft.value);
    }
}

topLeft.oninput = function() {
    changeBorderRadius('top-left'); 
}