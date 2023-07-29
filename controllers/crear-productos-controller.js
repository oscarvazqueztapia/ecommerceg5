import { productosServicios } from "../servicios/productos-servicios";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento)=> {
    evento.preventDefault()

    const descripcion = document.querySelector("[data-descripcion]").value
    const precio = document.querySelector("[data-precio]").value

    productosServicios.crearProductos(descripcion,precio).then( respuesta => {
        window.location.href="../index.html"
        console.log(respuesta)
    }).catch(error =>{
        console.log(error)
    })
})
