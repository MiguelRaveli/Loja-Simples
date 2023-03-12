
window.onload = () =>{

const details = [ 
    {
        text: 'Bicicleta preta com 21 machas, aro 29, feita de carbono',
        id: 0
    },
    {
        text: 'Bolsa branca feita de couro de elefante com detalhes marrons',
        id: 1
    },
    {
        text: 'Máquina de lavar branca com 9 ciclos de lavagem',
        id: 2
    }, 
    {
        text: 'Carregador da apple branco ORIGINAL',
        id: 3
    },
    {
        text: 'Impressora HP branca colorida com bluetooth',
        id: 4
    },
    {
        text: 'JBl preta com sincronizaçã de rádio. Via bluetooth',
        id: 5
    }

] 

function getDetailsById(id) {
    return details.find((detail)=> detail.id === Number(id))

}

const frame = document.querySelector("div#frame")
const frameDetails = document.querySelector("div#frameDetails")
const titlePRODUCT = document.getElementById("titlePRODUCT")
const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("id")
const product = getProductById(productId)


titlePRODUCT.innerHTML = product.name.toUpperCase()

const productFrame = document.createElement("div");
const productImg = document.createElement("div");
const productLabel = document.createElement("h1");
const productPrice = document.createElement("h1");
const productDetails = document.createElement("h1")
const text = document.createElement("h1")


productDetails.setAttribute('class', 'productDetails')
productDetails.innerHTML = "Preço: "
text.setAttribute('class', 'productDetails')
text.innerHTML = getDetailsById(productId).text

productFrame.setAttribute('id', product.id)
productFrame.setAttribute('class', 'productS_P')


productImg.setAttribute('class', 'productImg')
productImg.style.setProperty('background-image', `url(./${product.name}.jpg)`)

const a  = (product.price).toLocaleString('pt-br', { 
    style: 'currency', 
    currency: 'BRL' 
});

productPrice.innerHTML = (a)
productPrice.setAttribute('class', 'productDetails')

productLabel.setAttribute('class', 'productDetails')
productLabel.innerHTML = `${(product.name)}`



productFrame.append(productImg)


frameDetails.append(productDetails)
frameDetails.append(productPrice)
frameDetails.append(text)
frame.append(productFrame)




  

}
