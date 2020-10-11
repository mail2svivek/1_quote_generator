
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
 
 if (quoteJSON.quoteAuthor===''){
  authorName.innerText="Unknown"
   }else {
   authorName.innerText = quoteJSON.quoteAuthor
  }
  quoteText.innerText = quoteJSON.quoteText
  if (quoteJSON.quoteText.length > 50 ){
   quoteText.classList.add('long-quote')
  } else {
   quoteText.classList.remove('long-quote')
  }
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