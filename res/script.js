const randomFromList = (l) => l[Math.floor(Math.random() * list.length)]

const imageFromDrive = randomFromList(list);

var img = document.createElement("img");
img.src = `https://drive.google.com/uc?export=view&id=${imageFromDrive.id}`;
img.className = "center-fit"
console.log(img)

var src = document.getElementById("imgbox");
console.log(src)
src.appendChild(img);