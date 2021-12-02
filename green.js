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
          if ((item.sun == vSun) & (item.water == vWater)) {
            return true;
          } else {
            return false;
          }
        });

        const res = filtro.map(function (green) {
          console.log(green);
          // resultado.textContent = green.name

          var divBox = document.createElement("div");
          var txtBox = document.createTextNode(green.name);
          divBox.appendChild(txtBox);
          var divResultado = document.getElementById("resultado");
          document.body.insertBefore(divBox, divResultado);
        });

        // console.log(filtro);

        const filtroSun = data.filter(function (item) {
          // console.log(item);
          // if (item.sun == vSun) resultado.textContent = item.name
          // if (item.sun == vSun & item.water == vWater) {
          //    resultado.textContent = item.name
          // } else {
          //    resultado.textContent = ''
          // }
        });
      });

      // data.map( lista =>{
      //    const sol = lista.filter(sol => sol.includes(sun.value));
      // })

      // resultado.textContent = JSON.stringify(data)
    })
    .catch((error) => console.log(error));
}

getGreen();
