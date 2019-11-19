const addPictures = document.querySelector('#Show');
const mixPictures = document.querySelector('#Mix');
const places = document.querySelector("ul");

addPictures.addEventListener('click', addThePicture);
mixPictures.addEventListener('click', mixedPicture);

let foto = ['picture1', 'picture2', 'picture3', 'picture4', 'picture5', 'picture6', 'picture7', 'picture8', 'picture9', 'picture10', 'picture11']

function addThePicture() {
    for (let i=0; i<foto.length; i++){
        const place = document.createElement('li');
        const fotos = document.createElement('img');
        fotos.src='img/'+foto[i]+'.jpg';
        places.appendChild(place);
        place.appendChild(fotos);
    }
}
function displayNone() {
    let close = document.getElementById('Show');
    if (close.style.display === "none"){
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }
}
function mixedPicture() {

    const newOne = foto;
    naujas.sort(function () {
       return 0.8 - Math.random()
    });
    console.log(newOne);
    const select = document.querySelector('img');
    for (const elements of naujas){
        console.log(elements);
        select.src = 'img/' + elements + '.jpg';
    }
}