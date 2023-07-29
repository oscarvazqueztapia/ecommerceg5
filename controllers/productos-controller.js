
const nuevoProducto = (descripcion,precio,id) =>
{   const card = document.createElement("div")
    const contenido =  `
    <div class="productos__espacioIndividual">
    <img class="starwars__producto__img" src "${descripcion}">
    <p class="productos__espacio__descripcion">${descripcion}</p><br>
    <p class="productos__espacio__precio">${precio}</p><br>    
    </div>
    `

    card.innerHTML = contenido
    card.dataset.id = id
    return card
}
const productos = document.querySelector('[data-product]')

