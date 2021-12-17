const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');
const cube = document.querySelector('.cube');

const valueTopLeft = document.querySelector('.spanTopLeft');
const valueTopRight = document.querySelector('.spanTopRight');
const valueBottomLeft = document.querySelector('.spanBottomLeft');
const valueBottomRight = document.querySelector('.spanBottomRight');


function changeBorderRadius(position) {
    if (position == 'top-left') {
        cube.style.borderTopLeftRadius = `${topLeft.value}%`;
        valueTopLeft.value = `${topLeft.value}`;
    }
    if (position == 'top-right') {
        cube.style.borderTopRightRadius = `${topRight.value}%`;
        valueTopRight.value = `${topRight.value}`;
    }
    if (position == 'bottom-left') {
        cube.style.borderBottomLeftRadius = `${bottomLeft.value}%`;
        valueBottomLeft.value = `${bottomLeft.value}`;
    }
    if (position == 'bottom-right') {
        cube.style.borderBottomRightRadius = `${bottomRight.value}%`;
        valueBottomRight.value = `${bottomRight.value}`;
    }
}

topLeft.oninput = function() {
    changeBorderRadius('top-left'); 
}

topRight.oninput = function() {
    changeBorderRadius('top-right')
}

bottomLeft.oninput = function() {
    changeBorderRadius('bottom-left')
}

bottomRight.oninput = function() {
    changeBorderRadius('bottom-right')
}

// Change Border Radius by inserting a value in input fields

valueTopLeft.oninput = function() {
    changeValue(0);
}
valueTopRight.oninput = function() {
    changeValue(1);
}
valueBottomLeft.oninput = function() {
    changeValue(2);
}
valueBottomRight.oninput = function() {
    changeValue(3);
}

function changeValue(numar) {
    const selectAllInputs = document.querySelectorAll('.input-value');
    const selectAllCorners = document.querySelectorAll('.corner');

        if (selectAllInputs[numar].value < 0 || selectAllInputs[numar].value > 100) {
            if (selectAllInputs[numar].value < 0) 
            selectAllInputs[numar].value = 0;
    
            if (selectAllInputs[numar].value > 100)
            selectAllInputs[numar].value = 100;
        } 
        else if (selectAllInputs[numar].value.length == 0) {    
            selectAllInputs[numar].value = 0;
            selectAllCorners[numar].value = 0;
            changeCornerRadiusToZero(numar);
        }  
        else {
            topLeft.value = valueTopLeft.value;
            cube.style.borderTopLeftRadius = `${valueTopLeft.value}%`;

            topRight.value = valueTopRight.value;
            cube.style.borderTopRightRadius = `${valueTopRight.value}%`;

            bottomLeft.value = valueBottomLeft.value;
            cube.style.borderBottomLeftRadius = `${valueBottomLeft.value}%`;

            bottomRight.value = valueBottomRight.value;
            cube.style.borderBottomRightRadius = `${valueBottomRight.value}%`;
        }
}

function changeCornerRadiusToZero (numar) {
    if (numar === 0) {
        cube.style.borderTopLeftRadius = '0%';
    }
    else if (numar === 1) {
        cube.style.borderTopRightRadius = '0%';
    }
    else if (numar == 2) {
        cube.style.borderBottomLeftRadius = '0%';
    }
    else if (numar == 3) {    
        cube.style.borderBottomRightRadius = '0%';
    }
}