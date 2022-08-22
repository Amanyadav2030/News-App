
let getData=async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.articles);
    return data.articles;
}
let append=(data,container)=>{
   
    container.innerHTML=null;
    data.forEach((el)=>{
        let div = document.createElement('div');
        div.id="news";
        let title = document.createElement('h3');
        title.innerText=el.title;
        let desc = document.createElement('p');
        desc.innerText=el.description; 
        let img = document.createElement('img');
        img.src = el.urlToImage;
        let Flex = document.createElement('div');
        Flex.append(title,desc)
        div.append(img,Flex);
        div.onclick=()=>{
        localStorage.setItem('news',JSON.stringify(el));
        window.location.href="news.html";
        }
        container.append(div);
    });
}
export {getData,append};