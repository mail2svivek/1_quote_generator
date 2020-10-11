
// Get Quote from API


async function getQuoteForismatic(){
 const proxyUrl='https://cors-anywhere.herokuapp.com/'
 const apiUrl ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
 try {
 let quoteResp = await fetch(proxyUrl + apiUrl)
 let quoteJSON = await quoteResp.json()
 console.log(quoteJSON)
 } catch(error){
  getQuoteForismatic()
  console.log('whoops, no quote', error)
 }

}


//Onload

getQuoteForismatic()