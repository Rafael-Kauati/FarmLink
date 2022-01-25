/*let produtosMP = {'produtos':[
    {'item' : 'lettuce', "imgSrc" : '../pictures/lettuce.jpg'},
    {'item' : 'carrots', "imgSrc" : '../pictures/carrot.jpg'},
    {'item' : 'corn', "imgSrc" : '../pictures/corn.jpg'}
]}
*/
let produtos = [
    {"produto" : "Milho" ,"distancia": "25km", "ImagemSrc" : "../pictures/corn.jpg", "id" : "65", "productorID" : "111", "preco" : "2.65", "tipo" : "vegetal"},
    {"produto" : "Feijão" ,"distancia": "25km", "ImagemSrc" : "../pictures/beans.jpg", "id" : "23", "productorID" : "111", "preco" : "3.65", "tipo" : "semente"},
    {"produto" : "limão" ,"distancia": "25km", "ImagemSrc" : "../pictures/lime.jpg", "id" : "23", "productorID" : "111", "preco" : "3.05", "tipo" : "fruta"},
    {"produto" : "pimentão" ,"distancia": "25km", "ImagemSrc" : "../pictures/redpepper.jpg", "id" : "23", "productorID" : "111", "preco" : "1.20", "tipo" : "fruta"},
    {"produto" : "Cenoura" ,"distancia": "32km", "ImagemSrc" : "../pictures/carrot.jpg", "id" : "34", "productorID" : "222", "preco" : "3.85", "tipo" : "raiz"},
    {"produto" : "Arroz" ,"distancia": "32km", "ImagemSrc" : "../pictures/rice.jpg", "id" : "11", "productorID" : "222", "preco" : "4.55", "tipo" : "semente"},
    {"produto" : "abacaxi" ,"distancia": "32km", "ImagemSrc" : "../pictures/pineapple.jpg", "id" : "11", "productorID" : "222", "preco" : "5.55", "tipo" : "fruta"},
    {"produto" : "Abóbora" ,"distancia": "32km", "ImagemSrc" : "../pictures/pump.jpg", "id" : "11", "productorID" : "222", "preco" : "6.30", "tipo" : "fruta"},
    {"produto" : "Alface" ,"distancia": "11km", "ImagemSrc" : "../pictures/lettuce.jpg", "id" : "39", "productorID" : "333", "preco" : "4.75", "tipo" : "vegetal"},
    {"produto" : "Morango" ,"distancia": "11km", "ImagemSrc" : "../pictures/morango.jpg", "id" : "90", "productorID" : "333", "preco" : "8.95", "tipo" : "fruta"},
    {"produto" : "Laranja" ,"distancia": "11km", "ImagemSrc" : "../pictures/orange.jpg", "id" : "90", "productorID" : "333", "preco" : "3.15", "tipo" : "fruta"},
    {"produto" : "cogumelo portobelo" ,"distancia": "11km", "ImagemSrc" : "../pictures/mushroom.jpg", "id" : "90", "productorID" : "333", "preco" : "2.85", "tipo" : "cogumelo"}

]      
//localStorage.setItem("MPproducts", JSON.stringify(prod))


let produtores = {
    "producer111" : {"nome":"Fazenda Santa Horta","distancia": "25km" , "imagemsrc" : "../pictures/farm1.jpg","localizacao" : "Rua João das Regras 202, Aveiro" ,"id": "111", "entrega" : "3.45", "rating": "91%", "arrayOfertas" : [
        {"produto" : "Milho" , "ImagemSrc" : "../pictures/corn.jpg", "id" : "65", "productorID" : "111", "preco" : "2.65", "tipo" : "vegetal"},
        {"produto" : "Feijão" , "ImagemSrc" : "../pictures/beans.jpg", "id" : "23", "productorID" : "111", "preco" : "3.65", "tipo" : "semente"},
        {"produto" : "limão" , "ImagemSrc" : "../pictures/lime.jpg", "id" : "23", "productorID" : "111", "preco" : "3.05", "tipo" : "fruta"},
        {"produto" : "pimentão" , "ImagemSrc" : "../pictures/redpepper.jpg", "id" : "23", "productorID" : "111", "preco" : "1.20", "tipo" : "fruta"},


    ]},

    "producer222" : {"nome":"Fazenta Domingos","distancia": "32km" , "imagemsrc" : "../pictures/farm1.jpg", "localizacao" : "Avenida Andre Bastos 190, Aveiro" , "id": "222", "entrega" : "5.55", "rating": "88%", "arrayOfertas" : [
        {"produto" : "Cenoura" , "ImagemSrc" : "../pictures/carrot.jpg", "id" : "34", "productorID" : "222", "preco" : "3.85", "tipo" : "raiz"},
        {"produto" : "Arroz" , "ImagemSrc" : "../pictures/rice.jpg", "id" : "11", "productorID" : "222", "preco" : "4.55", "tipo" : "semente"},
        {"produto" : "abacaxi" , "ImagemSrc" : "../pictures/pineapple.jpg", "id" : "11", "productorID" : "222", "preco" : "5.55", "tipo" : "fruta"},
        {"produto" : "Abóbora" , "ImagemSrc" : "../pictures/pump.jpg", "id" : "11", "productorID" : "222", "preco" : "6.30", "tipo" : "fruta"},

    ]},

    "producer333" : {"nome":"Quinta do Edu","distancia": "11km" ,  "imagemsrc" : "../pictures/farm1.jpg","localizacao" : "Estrada nova terra 91, Aveiro" ,"id": "333", "entrega" : "6.75", "rating": "71%", "arrayOfertas" : [

        {"produto" : "Alface" , "ImagemSrc" : "../pictures/lettuce.jpg", "id" : "39", "productorID" : "333", "preco" : "4.75", "tipo" : "vegetal"},
        {"produto" : "Morango" , "ImagemSrc" : "../pictures/morango.jpg", "id" : "90", "productorID" : "333", "preco" : "8.95", "tipo" : "fruta"},
        {"produto" : "Laranja" , "ImagemSrc" : "../pictures/orange.jpg", "id" : "90", "productorID" : "333", "preco" : "3.15", "tipo" : "fruta"},
        {"produto" : "cogumelo portobelo" , "ImagemSrc" : "../pictures/mushroom.jpg", "id" : "90", "productorID" : "333", "preco" : "2.85", "tipo" : "cogumelo"}

    ]}

    
}


$(document).ready(function(){
    let produtosMarketPlace = JSON.stringify(produtos)
    localStorage.setItem('produtos', produtosMarketPlace)

    let produtoresMarketPlace = JSON.stringify(produtores)
    localStorage.setItem('produtores', produtoresMarketPlace);
});

