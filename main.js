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
} else {
    alert("¡Te esperamos pronto!");
}

