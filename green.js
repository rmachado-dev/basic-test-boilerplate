const url = "https://front-br-challenges.web.app/api/v2/green-thumb/?sun=high&water=regularly&pets=false"

function getGreen(){
   axios.get(url)
   .then(response =>{
      console.log(response.data)
      const data = response.data
      resultado.textContent = JSON.stringify(data)
   })
   .catch(error => console.log(error))
}

getGreen()