const contenedorClientes = document.querySelector(".contenedorClientes");

fetch(`http://localhost:3000/clients/getAll`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    drawDataClients(contenedorClientes, json);
  })
  .catch((error) => console.error(error));
