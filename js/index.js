const  quotes=[
{
    quote:'“Be yourself; everyone else is already taken.”',
    author:'Oscar Wilde'
},
{
    quote:'“If you tell the truth, you do not have to remember anything.”',
    author:'Marilyn Monroe'
},
{
    quote:'“So many books, so little time.”',
    author:'Frank Zappa'
},
{
    quote:'“A room without books is like a body without a soul.”',
    author:'Marcus Tullius Cicero'
},
{
    quote:'“You only live once, but if you do it right, once is enough.”',
    author:'Mae West'
}

];

let storage=[];
let randoms;

function generateQuote(){
  
   
    if(storage.length === quotes.length ){
        storage = [];
    }
    do{
        randoms = Math.floor(Math.random()*quotes.length);

    }while(storage.indexOf(randoms) !== -1)
        storage.push(randoms);



    document.getElementById('quoteresult').innerHTML = `${quotes[randoms].quote}`;
    document.getElementById('authorresult').innerHTML = `${quotes[randoms].author}`;
    
    

   
   
}



