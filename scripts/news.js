// Ude Impimport navbar from '../components/navbar.js';
import navbar from '../components/navbar.js';
// console.log(navbar());
// console.log("aman")
 document.getElementById('navbar').innerHTML=navbar()
let data = JSON.parse(localStorage.getItem("news"));

append(data);
console.log(data);
function append(data){
    let container = document.querySelector('#detailed_news');
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = data.urlToImage;
    let title = document.createElement('h2');
    title.innerText = data.title;
    let desc = document.createElement('p');
    desc.innerText = data.content;
    div.append(img,title,desc);
    container.append(div);

}

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    return false;
  }
};