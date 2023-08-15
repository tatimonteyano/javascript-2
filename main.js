if (confirm("Bienvenidos a la mejor plataforma de CDs de Argentina. ¿Desea continuar?")) {
    console.log("Continuar");

    let cdArtista = prompt("Ingrese nombre del artista:");
    cdArtista = cdArtista.toLowerCase();

    // Array de los CDs
    const cds = [
        {
            id: 1,
            titulo: "Paradise",
            artista: "Lana del Rey",
            precio: "$99",
            genero: "Indie Pop",
        },
        {
            id: 2,
            titulo: "WorldWide Angel",
            artista: "Bad Gyal",
            precio: "$39",
            genero: "Genero Urbano",
        },
        {
            id: 3,
            titulo: "When We All Fall Asleep, Where Do We Go?",
            artista: "Billie Eillish",
            precio: "$59",
            genero: "Indie",
        }
    ];

    const cdsArtista = cds.filter(cd => cd.artista.toLowerCase() === cdArtista);

    if (cdsArtista.length > 0) {
        for (const cd of cdsArtista) {
            alert(`Título: ${cd.titulo}\nArtista: ${cd.artista}\nPrecio: ${cd.precio}\nGénero: ${cd.genero}`);
        }
    } else {
        alert(`No se encontraron CDs para el artista ${cdArtista}.`);
    } 
    
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea calcular:"));
    let costoTotal = 0;
    
    for (let contador = 1; contador <= cantidadProductos; contador++) {
        let producto = prompt(`Ingrese el nombre del Producto ${contador}:`);
        let precioProducto = parseFloat(prompt(`Introduzca el precio del Producto ${producto}:`));
    
        if (isNaN(precioProducto)) {
            alert("El precio ingresado no es válido. Inténtalo nuevamente.");
        } else {
            costoTotal += precioProducto;
        }
    }
    alert(`El costo total de tus productos es: ${costoTotal}`);
    
   if (confirm (" ¿Antes de irte, te gustaria agregar algun album a nuestra coleccion?")){
     let NewArtista = prompt ("introduce el nombre del artista");
     let NewAlbum = prompt ("introduce el nombre del album");
     let NewPrecio = parseInt(prompt ("introduce el precio"));

    let agregar =[NewArtista ,NewAlbum, NewPrecio]
    function agregarProductoALaColeccion (producto) {
        agregar.push(producto);
        alert(`Producto "${producto}" agregado a la coleccion.`);
  };
  agregarProductoALaColeccion(agregar);
    
} else {
    alert("¡Te esperamos pronto!");
}
  console.log(Date());
};
