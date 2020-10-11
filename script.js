
// Get Quote from API
const quoteContainer = document.getElementById('quote-container')
const quoteText=document.getElementById('quote')
const authorName=document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

async function getQuoteForismatic(){
 const proxyUrl='https://cors-anywhere.herokuapp.com/'
 const apiUrl ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
 try {
 let quoteResp = await fetch(proxyUrl + apiUrl)
 let quoteJSON = await quoteResp.json()
 console.log(quoteJSON)
 quoteText.innerText = quoteJSON.quoteText

 authorName.innerText = quoteJSON.quoteAuthor
 } catch(error){
  //getQuoteForismatic()
  console.log('whoops, no quote', error)
 }

}

newQuoteBtn.addEventListener('click', getQuoteForismatic)
//Onload

getQuoteForismatic()