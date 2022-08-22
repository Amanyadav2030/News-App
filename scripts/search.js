// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from '../components/navbar.js';
import {getData,append} from '../components/fetch.js';
let Url = new URL(window.location);
let params = new URLSearchParams(Url.search);
let q = params.get("q"); 
console.log(q);
let url = `https://masai-api.herokuapp.com/news?q=${q}`;


getData(url).then((res)=>{
        append(res,container);
}).catch(err=>console.log(err.message));


    document.getElementById('navbar').innerHTML=navbar();
    let search = document.getElementById('search_input');
    let container = document.querySelector('#results');
    // console.log(document.location.href);
    search.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let query = search.value;
          let url = `https://masai-api.herokuapp.com/news?q=${query}`;
            getData(url).then((res)=>{
                // console.log(res);
                    append(res,container);
        }).catch(err=>console.log(err.message));
        }
      });  

      // document.addEventListener('contextmenu', event => event.preventDefault());
      // document.onkeydown = function (e) {
      //   if (event.keyCode == 123) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
      //     return false;
      //   }
      //   if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
      //     return false;
      //   }
      // };