/* ================  ================ */
// ARRAY DE PRODUCTOS (Global)
let productos = []

/* ================ CLASE PRODUCTO ================ */
class Producto {
    constructor(tipoProd, marca, precio, stock) {

        // ATRIBUTOS
        this.tipoProd = tipoProd
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    // MÉTODOS
    comprar = (cant) => {
        if (this.validarStock(cant)) {
            this.disminuirStock(cant)
            alert("Compra efectuada con éxito\nMuchas gracias!")
            console.log(`Stock actualizado - Quedan ${this.stock} unidades del producto ${this.tipoProd} ${this.marca}`)
        }
        else {
            alert(`Stock insuficiente - Hay ${this.stock} unidades de ${this.tipoProd} ${this.marca}`)
        }
    }

    validarStock = (cant) => this.stock >= cant

    disminuirStock = (cant) => {
        this.stock = this.stock - cant
    }
}

/* ================ MENÚ DE COMPRA ================ */
menuCompra = () => parseInt(prompt("Bienvenido, escoja el producto que desea comprar: \n\n" + mostrarCatalogoProductos()))

function mostrarCatalogoProductos() {
    let option = 1
    let textoCatalogo = ""
    productos.forEach((prod) => {textoCatalogo += `${option}.  ${prod.tipoProd}, ${prod.marca}, $${prod.precio}, ${prod.stock} unidades\n`; option++})
    textoCatalogo += `${option}.  salir`
    return textoCatalogo
}

/* ================ DECLARACIÓN FUNCIÓN PRINCIPAL ================ */
function main() {

    let eleccionMenuCompra = 0
    let eleccionMenuRepeat = 0
    let salirMenuCompra = 0
    let cantDeseadaProd = 0

    // CARGA DE PRODUCTOS
    productos.push(new Producto("lapicera", "bic", 50, 10))
    productos.push(new Producto("lapicera", "pelikan", 70, 5))
    productos.push(new Producto("goma de borrar", "pelikan", 15, 15))
    productos.push(new Producto("sacapuntas", "maped", 25, 4))

    // MUESTRA DE MENÚ, SELECCIÓN Y EJECUCIÓN DE COMPRA
    while (true) { // itera hasta que el usuario salga o deje de comprar productos

        salirMenuCompra = productos.length + 1

        while (true) { // itera hasta que la opción ingresada sea válida
            eleccionMenuCompra = menuCompra()
            if (eleccionMenuCompra > 0 && eleccionMenuCompra <= salirMenuCompra) {
                break
            }
            alert("Opción incorrecta")
        }

        if (eleccionMenuCompra === salirMenuCompra) {
            break
        }
        else
        {
            prodElegido = productos[eleccionMenuCompra - 1]

            while (true) { // itera hasta que la opción ingresada sea válida
                cantDeseadaProd = parseInt(prompt(`Especifique la cantidad de unidades de ${prodElegido.tipoProd} ${prodElegido.marca} que desea comprar`))
                if (cantDeseadaProd > 0) {
                    break
                }
                alert("Opción incorrecta")
            }

            prodElegido.comprar(cantDeseadaProd)

            while (true) { // itera hasta que la opción ingresada sea válida
                eleccionMenuRepeat = parseInt(prompt("Desea realizar otra compra?\n1.  SI\n2.  NO"))
                if ((eleccionMenuRepeat === 1 || eleccionMenuRepeat === 2)) {
                    break
                }
                alert("Opción incorrecta")
            }

            if (eleccionMenuRepeat === 2) {
                break
            }
        }
    }

    alert("Muchas gracias por visitarnos, hasta luego!")
}

/* ================ LLAMADO FUNCIÓN PRINCIPAL ================ */
main()