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
    newOne.sort(function () {
       return 0.2 - Math.random()
    });
    console.log(newOne);

    const select = document.querySelectorAll('img');
    for (let i=0; i<newOne.length; i++) {
        select[i].src = 'img/' + newOne[i] + '.jpg';
    }

    const changedPicture = "img/changed.png";

    change = document.querySelectorAll("img")

        change.ondblclick = function(r){
            r.target.src = changedPicture;
        }

        console.log(change);
}