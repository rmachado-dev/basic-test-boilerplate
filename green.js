// url para consumo do json
const url =
  "https://front-br-challenges.web.app/api/v2/green-thumb/?sun=high&water=regularly&pets=false";

// captando os valores dos filtros
var sun = document.getElementById("sun");
var water = document.getElementById("water");
var pets = document.getElementById("pets");

// funcao para criar box green
function boxGreen() {
  var divBox = document.createElement("div");
  var txtBox = document.createTextNode("Novo elemento!");
  divBox.appendChild(txtBox);
  var divResultado = document.getElementById("resultado");
  document.body.insertBefore(divBox, divResultado);
}

// função para gerar o resultado
function getGreen() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;

      addEventListener("change", function () {
        var vSun = sun.value;
        var vWater = water.value;
        var vPets = pets.value;
        // console.log(vSun)
        // console.log(vWater)
        // console.log(vPets)
        // const filtro = data.filter(item => item.sun == vSun & item.water == vWater)

        const filtro = data.filter(function (item) {
          //  console.log(item);
          if (item.sun == vSun && item.water == vWater) {
            return true;
          } else {
            return false;
          }
        });

        const res = filtro.map(function (green) {
          //  console.log(green);
          // resultado.textContent = green.name

          //  var divResultado = document.getElementById("resultado");
          //  var titulo = document.createElement("h2");
          //  var texto = document.createTextNode(green.name);
          //  titulo.appendChild(texto);
          //  divResultado.appendChild(titulo);

          //  var fav = document.createElement('div');
          //  fav.classList.add('favorite');
          //  var txtFav = document.createTextNode("Staff favorite");
          //  fav.appendChild(txtFav);
          //  box.appendChild(fav);

          /*
				id: 5
				name: "Bamboo"
				price: 15
				staff_favorite: false
				sun: "low"
				toxicity: false
				url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/lucky-bamboo.png"
				water: "regularly"




				 <div class="box">
					<img src="images/plants/calathea-triostar.jpg" alt="" />
					<h3>Bunny ears cacti</h3>
					<div class="info">
						<h4>$25</h4>
						<div>
						<img src="images/icons/pet.svg" alt="image" class="icones" />
						<img src="images/icons/low-sun.svg" alt="image" class="icones" />
						<img src="images/icons/1-drop.svg" alt="image" class="icones" />
						</div>
					</div>
				</div>
			*/

          var divGrid = document.getElementsByClassName("grid");
          var box = document.createElement("div");
          box.classList.add("box");

          var image = '<img src="' + green.url + '" alt="images" class="icones" />';


          var titulo = document.createElement("h3");
          var nome = document.createTextNode(green.name);
          titulo.appendChild(nome);

          var fav = document.createTextNode(green.staff_favorite);

          var preco = document.createElement("h4");
          var valor = document.createTextNode(green.price);
          preco.appendChild(valor);

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
