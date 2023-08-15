const imgs = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg"
]

const container = document.getElementById("container")

function renderImages(){
    let imgsDOM = ""
    for(let i=0 ; i< imgs.length ; i++){
        imgsDOM += `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()