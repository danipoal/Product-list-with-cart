import {itemHtml} from "./constantes.js";
const rellenarItems = (data) => {
    const items = document.querySelectorAll('#productItem');

    
    let jsonIndex = 0;
    items.forEach((item) => {
        const imagen = item.querySelector('#itemImage');
        const titulo = item.querySelector('#itemName');
        const type = item.querySelector('#productType');
        const price = item.querySelector('#itemPrice');
        // console.log(data[jsonIndex].name);

        imagen.src = data[jsonIndex].image.desktop;
        titulo.textContent = data[jsonIndex].name;
        type.textContent = data[jsonIndex].category;
        price.textContent = "$" + data[jsonIndex].price; 
        jsonIndex++;
    })
}
const inyectarItem = (data) => {
    const productRow = document.querySelector('#productRow');
    data.forEach( () => {
        productRow.innerHTML+= itemHtml;
    })
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        inyectarItem(data);
        rellenarItems(data);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

