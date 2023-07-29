
      //get

        const listaProductos = ()=> {
            fetch("http://localhost:3000/producto")
            .then( respuesta => respuesta.json())
            .catch(error => console.log(error))
        }
        //post
        const crearProductos = (descripcion,precio) =>
        {
            fetch("http://localhost:3000/producto",{
              method: "POST",
              headers: 
               {
                "Content-Type": "application/json "
              },
              body: JSON.stringify({
                descripcion,
                precio
              })
        }).then(respuesta => {
           if(respuesta.ok){
             return respuesta.body
           }
        })
        throw new Error ("no se pudo crear el producto")
        }
        
        export const productosServicios = {
            listaProductos,
            crearProductos
        }

    