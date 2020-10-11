
// Get Quote from API
const quoteContainer = document.getElementById('quote-container')
const quoteText=document.getElementById('quote')
const authorName=document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loaderEle = document.getElementById('loader')

//Show loading
function loading(){
 loaderEle.hidden=false
 quoteContainer.hidden=true
}


//Hide Loading

function complete(){
 if(!loaderEle.hidden){
  loaderEle.hidden=true
  quoteContainer.hidden=false 
 }
}

async function getQuoteForismatic(){
 loading()
 const proxyUrl='https://cors-anywhere.herokuapp.com/'
 const apiUrl ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
 try {
  let quoteResp = await fetch(proxyUrl + apiUrl)
  let quoteJSON = await quoteResp.json()
  console.log(quoteJSON)
  
  if (quoteJSON.quoteAuthor===''){
   authorName.innerText="Unknown"
    }else {
    authorName.innerText = quoteJSON.quoteAuthor
   }
   
   if (quoteJSON.quoteText.length > 100 ){
    quoteText.classList.add('long-quote')
   } else {
    quoteText.classList.remove('long-quote')
   }
   quoteText.innerText = quoteJSON.quoteText
   //Stop loader and call complete It will hide the loader and show the container
   complete()
 } catch(error){
  //getQuoteForismatic()
  console.log('whoops, no quote', error)
 }

}

function tweetQuote(){
 const quote= quoteText.innerText
 const authot = quoteText.innerText
 const twitterBaseUrl='https://twitter.com/intent/tweet'
 const twitterUrl=`${twitterBaseUrl}?text=${quote} - ${author}`
 window.open(twitterUrl,'_blank')
}

//Event Listeners

twitterBtn.addEventListener('click', tweetQuote)

newQuoteBtn.addEventListener('click', getQuoteForismatic)
//Onload

getQuoteForismatic()
// loading()