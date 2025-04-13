require('colors');
const prompt = require('readline-sync');

let catalogo = [];

function menulibreria() {
    console.log("Bienvenidos a libreria El Rincon del Saber".blue)
    console.log('1. Agregar libro')
    console.log('2. Mostrar catálogo')
    console.log('3. Buscar libro por título')
    console.log('4. Eliminar libro')
    console.log('5. Ver estadísticas')
    console.log('6. Ordenar libros')
    console.log('7. Editar libro')
    console.log('8. Salir')
}

function agregarLibro() {
    const titulo = prompt.question("Ingresa el titulo: > ");
    const Autor = prompt.question("Ingresa el autor: > ");
    const precio = parseFloat(prompt.question("Ingresa el precio: > "));
    const anioPublicacion = parseInt(prompt.question("Ingresa el año de publicacion: > "));

    if (isNaN(precio) || precio <= 0) {
        console.log('Datos invalidos vuelva a intentarlo'.red)
        return
    }

    catalogo.push({titulo, Autor, precio, anioPublicacion})
    console.log('El libro a sido agrgado correctamente'.green)
}

function mostrarCatalago() {
    if (catalogo.length === 0) {
        console.log('El catalago esta vacio, no hay libros agregados aun'. yellow)
        return
    }

    console.log('Catalago de libros'.bgBlue)
    catalogo.forEach((libro, index) => {
        console.log(
            `${index + 1 }. el Nombre del libro es "${libro.titulo}", de "${libro.Autor}", Q "${libro.precio} del año "${libro.anioPublicacion}"`
            
        )

    })
}

function buscarLibro() {
    const tituloBuscado = prompt.question('Ingrese el título del libro que desea buscar: > ');

    const libroEncontrado = catalogo.find(libro => 
        libro.titulo.toLowerCase() === tituloBuscado.toLowerCase()
    );

    if (libroEncontrado) {
        console.log(
            `"${libroEncontrado.titulo}", de "${libroEncontrado.Autor}", Q${libroEncontrado.precio} del año "${libroEncontrado.anioPublicacion}"`
        );
    } else {
        console.log('Libro no encontrado.'.red);
    }
}

function eliminarLibro(){
    const libro = prompt.question('Ingrese el titulo del libro que desea eliminar : >  ')
    const estaElLibro = catalogo.indexOf

    if (estaElLibro !== -1) {
        catalogo.splice(estaElLibro, 1)
        console.log('El libro a sido borrado correctamente'.green)
    } else {
        console.log('No se elimino nigun libro'.red)
    }
}

function estadísticas() {
    if (catalogo.length === 0) {
        console.log('No hay libros para mostrar estadísticas.'.red);
        return;
    }
    


    let total = catalogo.length

    const promedio = catalogo.reduce((sum, a) => sum + a.precio, 0) / total
    const masAntiguo = catalogo.reduce((a, b) => a.anioPublicacion < b.anioPublicacion ? a : b)
    const masCaro = catalogo.reduce((a, b) => a.precio > b.precio ? a : b)

    console.log(`EL total de libros es ${total},
                Precio Promedio ${promedio.toFixed(2)},
                El mas antiguo es ${masAntiguo.titulo.yellow},
                El libro mas caro es: ${masCaro.titulo.yellow}
        `)

}

function ordenarLibro(){
    if (catalogo === 0) {
        console.log('no hay libros para ordenar'.red)
        return
    } 

    console.log('1. Precio')
    console.log('2. Año')
    const comoOrdenar = parseInt(prompt.question('Como los desea ordenar?'.silver))
    
    let ordenadoPrecio 
    let ordenadoAnio
    
    if (comoOrdenar === 1) {
        ordenadoPrecio = catalogo.sort((a, b) => a.precio - b.precio)
        console.log(ordenadoPrecio)
    } else if (comoOrdenar === 2) {
        ordenadoAnio = catalogo.sort((a, b) => a.anioPublicacion - b.anioPublicacion)
        console.log(ordenadoAnio)
    } else {
        console.log('Opcion no valida')
    }

}
// Funcion con la cual se ve a buscar el libro y se editara
function editarLibro() {
    console.log('Editar libros '.bgBlue)
    const titulo = prompt.question('Ingrese el titulo del libro que desea editar : >   ')
    const libro = catalogo.find (libro => libro.titulo.toLowerCase() === titulo.toLocaleLowerCase())

    if (libro) {
        console.log('Libro no encontrado'.red)
        return
    }

    console.log('Ingrese los datos que desea cambiar')
    const nuevoTitulo = prompt.question(`Titulo [${libro.titulo}] : >  `) || libro.titulo
    const nuevoAutor = prompt.question(`Titulo [${libro.Autor}] : >  `) || libro.Autor
    const nuevoPrecio = parseFloat(prompt.question(`Titulo [${libro.precio}] : >  `)) || libro.precio
    const nuevoAnio = parseInt(prompt.question(`Titulo [${libro.anioPublicacion}] : >  `)) || libro.anioPublicacion

    libro.titulo = nuevoTitulo
    libro.Autor = nuevoAutor
    libro.precio = nuevoPrecio
    libro.anioPublicacion = nuevoAnio

    console.log('Libro actualizado'.bgGreen)
}

function menu() {
    let salir = false;
  
    while (!salir) {
      menulibreria();
      const opcion = prompt.question('Elige una opcion: ');
  
      switch (opcion) {
        case '1': 
        agregarLibro(); 
        break;
        case '2': 
        mostrarCatalago(); 
        break;
        case '3': 
        buscarLibro(); 
        break;
        case '4': 
        eliminarLibro(); 
        break;
        case '5': 
        estadísticas(); 
        break;
        case '6': 
        ordenarLibro(); 
        break;
        case '7': 
        editarLibro(); 
        break;
        case '8':
          console.log('👋 ¡Gracias por usar el sistema!'.green);
          salir = true;
          break;
        default:
          console.log('❌ Opción inválida.'.red);
      }
    }
  }
  
  menu();