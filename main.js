import {itemHtml, cartItem} from "./componentes.js";
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
const addElementToCart = (data) => {
    const addCartButtons = document.querySelectorAll('#addToCartItem');
    let numeroLinea = 0;
    let arrayCart = [];

    addCartButtons.forEach((addButon, indexCartButton) => {
        //Accion realizada al pulsar cada boton
        addButon.addEventListener('click', () =>{

            //TODO Funcion para insertar html del carrito
            const cartItemsContainer = document.querySelector('.cart-items-container');
            cartItemsContainer.innerHTML += cartItem;
            arrayCart.push(indexCartButton);
            console.log(arrayCart);

            //TODO Funcion introducir info en el html
            addInfoLine(indexCartButton, data, arrayCart);
            
        })
    })
    //Para cada boton que use sus cosas
}
const addInfoLine = (i, data, arrayCart) => {
    const cartLines = document.querySelectorAll('#cartItem');
    let contadorArrayCart = 0;
    //Esta funcion recorre el array que guardo al clickar en los productos y los escribe en las lineas
    //Como las lineas = los huecos de el array, de momento funciona
    
    cartLines.forEach(line => {
        const nombreLine = line.querySelector('#cartItemName');
        nombreLine.textContent = data[arrayCart[contadorArrayCart]].name;
        contadorArrayCart++;

    })

}
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        inyectarItem(data);
        rellenarItems(data);
        addElementToCart(data);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

