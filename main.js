



const frame = document.querySelector("div#frame")

window.onload = () =>{
 
   
    
    produtos.forEach((produto) =>{
        const product = document.createElement("div");
        const productImg = document.createElement("div");
        const productLabel = document.createElement("h1");
        const productPrice = document.createElement("h1");

        product.setAttribute('id', produto.id)
        product.setAttribute('class', 'product')


        productImg.setAttribute('class', 'productImg')
        productImg.style.setProperty('background-image', `url(./${produto.name}.jpg)`)

        const a  = (produto.price).toLocaleString('pt-br', { 
            style: 'currency', 
            currency: 'BRL' 
        });

        productPrice.innerHTML = (a)
        productPrice.setAttribute('class', 'productLabel')
        
        productLabel.setAttribute('class', 'productLabel')
        productLabel.innerHTML = `${(produto.name)}`

        product.append(productImg)
        product.append(productPrice)
        product.append(productLabel)
        

        frame.append(product)
        product.onclick = () => {clicked(produto.id)}
       
        

    }) 
    
    
}





function clicked(id){
    
            window.location.href = `http://127.0.0.1:5500/exercicios/exe033/screen_product.html?id=${id}`;  
            
            

 }






 








