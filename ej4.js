const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arreglo = [100, 200, 300, 400, 500];
let continuar = "S";

function preguntar() {
  rl.question("Ingrese valor a buscar: ", (input) => {
    let buscar = parseInt(input);
    let encontrado = false;

    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === buscar) {
        console.log(`El valor ingresado se encuentra en la posición: ${i}`);
        encontrado = true;
      }
    }

    if (!encontrado) {
      console.log("El valor ingresado no se encuentra en el arreglo.");
    }

    rl.question("¿Desea probar con otro valor? (S/N): ", (resp) => {
      continuar = resp.toUpperCase();
      if (continuar === "S") {
        preguntar();
      } else {
        rl.close();
      }
    });
  });
}

preguntar();
