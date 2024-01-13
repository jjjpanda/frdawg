const scrollToTop = function () {
    window.scrollTo(0, 0);
};

window.onbeforeunload = scrollToTop
window.onbeforeprint = scrollToTop

const randomFromList = (l) => l[Math.floor(Math.random() * list.length)]

const imageFromDrive = randomFromList(list);
var src = document.getElementById("imgbox");

var img = document.createElement("img");
img.src = `https://drive.google.com/uc?id=${imageFromDrive.id}`;
img.className = "center-fit"

const onError = () => {
    var div = document.createElement("div");
    div.textContent = "🤨";
    div.style.fontSize = "20vh"

    var explanation = document.createElement("p");
    explanation.textContent = "there should be a random image here but something went wrong, i blame google drive api"

    src.removeChild(img)
    src.appendChild(div)
    src.appendChild(explanation)
}

img.onerror = onError;
console.log(img)

src.appendChild(img);