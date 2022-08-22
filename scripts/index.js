// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from '../components/navbar.js';
import {getData,append} from '../components/fetch.js'; 

    document.getElementById('navbar').innerHTML=navbar();
    let search = document.querySelector('#search_input');
    // console.log(search);
    search.addEventListener('keypress',function(e){
        if(e.key=="Enter"){
            let url = `search.html?q=${search.value}`;
            window.location.href=url;
        }
    })
   

let container =document.querySelector('#results');
let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;
getData(url).then((res)=>{
    append(res,container);
})
document.querySelector('#in').addEventListener('click',()=>{
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;
    getData(url).then((res)=>{
        append(res,container);
    })
})
document.querySelector('#ch').addEventListener('click',()=>{
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=ch`;
    getData(url).then((res)=>{
        append(res,container);
    })
})
document.querySelector('#us').addEventListener('click',()=>{
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=us`;
    getData(url).then((res)=>{
        append(res,container);
    })
})
document.querySelector('#uk').addEventListener('click',()=>{
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=uk`;
    getData(url).then((res)=>{
        append(res,container);
    })
})
document.querySelector('#nz').addEventListener('click',()=>{
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=nz`;
    getData(url).then((res)=>{
        append(res,container);
    })
});

function hello(){
  alert("hello")
}  
    // document.addEventListener('contextmenu', event => event.preventDefault());
    // document.onkeydown = function (e) {
    //   if (event.keyCode == 123) {
    //     return false;
    //   }
    //   if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
    //     return false;
    //   }
    //   if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
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
    //   if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
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