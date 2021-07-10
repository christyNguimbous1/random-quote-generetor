//
const button = document.querySelector('button'); 
const h1 =document.querySelector('#quote');
const h2 =document.querySelector('#id');
const h3 =document.querySelector('#author');

function getQuote(){
   const url = "https://geek-quote-api.herokuapp.com/v1/quote" ;
    fetch(url)
    .then((response) => {return response.json()})
    .then((data)=>{
        //console.log(data)
      h1.innerHTML=`${data.quote}`
      h2.innerHTML=`id: ${data.id}`
      h3.innerHTML=`author: ${data.author}`
      })
    
}
button.addEventListener('click',getQuote);