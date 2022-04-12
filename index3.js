const linkValue = document.querySelector("#link")
const submit = document.querySelector("#submit")
const link1 = document.querySelector("#link1")
const link2 = document.querySelector("#link2")
const link3 = document.querySelector("#link3")
const container = document.querySelector(".shortLink")
const linkShort = document.createElement("div")
let hightLight = false
submit.addEventListener('click', () =>{
const getApi = async () => {
    alert("Select your short link you want to choose after submit link ")
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkValue.value}`, {
      method: 'GET'
    });
    const shortenApi = await response.json();
  
        for( let i in shortenApi ) {
            console.log(linkValue.value);
            shortenApi[i].original_link = linkValue.value
            console.log(shortenApi[i]);
            console.log(shortenApi[i].original_link);
          
            container.appendChild(linkShort)
            link1.addEventListener("click", () => {
                linkShort.innerHTML = shortenApi[i].short_link
                
            })
            link2.addEventListener("click", () => {
                linkShort.innerHTML = shortenApi[i].short_link2

                
            })
            link3.addEventListener("click", () => {
                linkShort.innerHTML = shortenApi[i].short_link3

             
            })
        }

 
 
  }
  getApi()
})
