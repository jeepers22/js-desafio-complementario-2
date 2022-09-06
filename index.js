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

// CREACIÓN PRODUCTO DE PRUEBA
const lapicera = new Producto("lapicera", "bic", 50, 10)

// TRANSFORMA OBJETO A TEXTO PARA VER LOS DISTINTOS ESTADÍOS DEL OBJETO
function mostrarObjetoEnTexto(objeto) {
    console.log("Producto\n---------")
    for (clave in objeto) {
        if (typeof objeto[clave] != "function") {
            console.log(`${clave}:${objeto[clave]}`)
        }
    }
}

// SIMULACIÓN DE VENTA

mostrarObjetoEnTexto(lapicera)

// Test de Producto inexistente
console.log("\nSimulación de venta de producto inexistente (Venta de 2 lapiceras pelican)\n--------------------------------------------")
console.log(lapicera.vender("lapicera", "pelican", 2))


// Test de faltantes
console.log("\nSimulación de venta con stock insuficiente (Venta de 20 lapiceras bic)\n-------------------------------------------")
console.log(lapicera.vender("lapicera", "bic", 20))
mostrarObjetoEnTexto(lapicera)

// Test de stock suficiente
console.log("\nSimulación de venta con stock suficiente (Venta de 5 lapiceras bic)\n-----------------------------------------")
console.log(lapicera.vender("lapicera", "bic", 5))
mostrarObjetoEnTexto(lapicera)