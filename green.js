// url para consumo do json
const url = "https://front-br-challenges.web.app/api/v2/green-thumb/?sun=high&water=regularly&pets=false";

// captando os valores dos filtros
var sun = document.getElementById("sun");
var water = document.getElementById("water");
var pets = document.getElementById("pets");

// função para gerar o resultado
function getGreen() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;

      // aguardando as selects da página
      addEventListener("change", function () {
        // pegando os valores dos selects
        var vSun = sun.value;
        var vWater = water.value;
        var vPets = pets.value;

        // filtrando os valores
        const filtro = data.filter(function (item) {
          if (item.sun == vSun && item.water == vWater) {
            return true;
          } else {
            return false;
          }
        });

        // percorrendo os valores do filtro
        const res = filtro.map(function (green) {
          // captando a grid para exibição
          var divGrid = document.getElementsByClassName("grid");

          // criando uma nova div e setando sua classe
          var box = document.createElement("div");
          box.classList.add("box");
          
					// exibindo a imagem da planta
          var image = '<img src="' + green.url + '" alt="images" class="icones" />';
          
					// exibindo o nome da planta estilizada
          var titulo = document.createElement("h3");
          var nome = document.createTextNode(green.name);
          titulo.appendChild(nome);
          
					// captando o favorito
          var fav = document.createTextNode(green.staff_favorite);
          
					// exibindo o preço estiizado
          var preco = document.createElement("h4");
          var valor = document.createTextNode(green.price);
          preco.appendChild(valor);
					
					// exibindo os ícones
          var icons = document.createElement("div");
          var icoSun = '<img src="images/icons/low-sun.svg" alt="image" class="icones" />';
          var icoPet = '<img src="images/icons/pet.svg" alt="image" class="icones" />';
          var icoWater = '<img src="images/icons/1-drop.svg" alt="image" class="icones" />';
        });
      });
    })
    .catch((error) => console.log(error));
}

getGreen();