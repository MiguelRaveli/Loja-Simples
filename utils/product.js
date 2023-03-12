
const produtos = [
    {   name: 'bicicleta',
        price: 2500,
        id: 0
    }, {
        name:'bolsa',
        price: 1200,
        id: 1
}, {
        name:'maquina',
        price: 3400,
        id:2
}, {
         name: 'carregador',
        price: 190,
        id:3
},{
        name: 'impressora',
        price: 3175,
        id:4
},{
        name: 'jbl',
        price: 890,
        id: 5
}


]
function getProductById(id) {
        return produtos.find((produto)=> produto.id === Number(id))
    
 }