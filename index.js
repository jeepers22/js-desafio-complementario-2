// CLASE PRODUCTO
class Producto {
    constructor(tipoProd, marca, precio, stock) {

        // ATRIBUTOS
        this.tipoProd = tipoProd
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    // MÉTODOS
    vender = (tipoProd, marca, cant) => {
        if (tipoProd == this.tipoProd && marca == this.marca) {
            if (this.validarStock(cant)) {
                this.disminuirStock(cant)
                console.log(`Venta exitosa - Quedan ${cant} unidades del producto ${tipoProd} ${marca} (stock actualizado OK)`)
            }
            else {
                console.log(`Venta fallida - Stock insuficiente, hay sólo ${this.stock} unidades del producto ${tipoProd} ${marca}`)
            }
        }
        else {
            console.log("El producto que desea vender no forma parte de su inventario")
        }
    }

    validarStock = (cant) => this.stock >= cant

    disminuirStock = (cant) => {
        this.stock = this.stock - cant
    }
}

// ARRAY DE PRODUCTOS
let productos = []

// TRANSFORMA OBJETO A TEXTO PARA VER LOS DISTINTOS ESTADÍOS DEL OBJETO
function mostrarObjetoEnTexto(objeto) {
    console.log("Producto\n---------")
    for (clave in objeto) {
        if (typeof objeto[clave] != "function") {
            console.log(`${clave}:${objeto[clave]}`)
        }
    }
}

// SOLICITAR PRODUCTO POR TECLADO
function obtenerProductoPorTeclado() {
    let tipoProd = prompt("Ingrese tipo de producto: ")
    let marca = prompt("Ingrese marca del producto: ")
    let precio = parseFloat(prompt("Ingrese precio del producto: "))
    let cant = parseInt(prompt("Ingrese cantidad de unidades del producto: "))
    return new Producto(tipoProd, marca, precio, cant)
}


agregarProducto = (producto) => {

	if (validarAlta(producto.tipoProd, producto.marca)) {
		productos.push(producto)
	}
    else {
        console.log("El producto ingresado ya existe")
    }
}

validarAlta = (tipoProd, marca) => {
    for (let producto of productos) {
        if (tipoProd == producto.tipoProd && marca == producto.marca) {
            return false // El producto ya existe, rechazar alta
            break
        }
    }
    return true
}

function main() {

    // CARGA DE EXISTENCIAS DE PRODUCTOS
    const lapiceraBic = new Producto("lapicera", "bic", 50, 10)
    const lapiceraPelikan = new Producto("lapicera", "pelikan", 70, 5)
    const borradorPelikan = new Producto("goma de borrar", "pelikan", 15, 15)
    const sacapuntasMaped = new Producto("sacapuntas", "maped", 25, 4)
    productos.push(lapiceraBic)
    productos.push(lapiceraPelikan)
    productos.push(borradorPelikan)
    productos.push(sacapuntasMaped)

    const producto = obtenerProductoPorTeclado()
    console.log(producto)
    agregarProducto(producto)
    console.log(productos)
}

main()


// SIMULACIÓN DE VENTA

// mostrarObjetoEnTexto(producto)

// Test de Producto inexistente
// console.log("\nSimulación de venta de producto inexistente (Venta de 2 lapiceras pelikan)\n--------------------------------------------")
// console.log(lapicera.vender("lapicera", "pelikan", 2))


// Test de faltantes
// console.log("\nSimulación de venta con stock insuficiente (Venta de 20 lapiceras bic)\n-------------------------------------------")
// console.log(producto.vender("lapicera", "bic", 20))
// mostrarObjetoEnTexto(producto)

// Test de stock suficiente
// console.log("\nSimulación de venta con stock suficiente (Venta de 5 lapiceras bic)\n-----------------------------------------")
// console.log(producto.vender("lapicera", "bic", 5))
// mostrarObjetoEnTexto(producto)