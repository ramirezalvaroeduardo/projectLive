
let sreen = ['allPart', 'newPart'];

function showArea( item ) {
    let element = document.getElementById( item );
    let elem2Hide = document.getElementById(sreen[1]);
    if(item === 'newPart') elem2Hide = document.getElementById('allPart');
    element.style.display = "block";
    elem2Hide.style.display = "none";
}

export {showArea};