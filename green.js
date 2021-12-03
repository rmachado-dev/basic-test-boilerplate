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
          // console.log(item);
          if ((item.sun == vSun) && (item.water == vWater)) {
            return true;
          } else {
            return false;
          }
        });

        const res = filtro.map(function (green) {
          //  console.log(green);
          // resultado.textContent = green.name

          var divResultado = document.getElementById("resultado");
          var titulo = document.createElement("h2");
          var texto = document.createTextNode(green.name);
          titulo.appendChild(texto);
          divResultado.appendChild(titulo);

          console.log(divResultado);
        });
      });
     
    })
    .catch((error) => console.log(error));
}

getGreen();
