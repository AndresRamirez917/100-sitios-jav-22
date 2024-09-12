async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const jsonArr = products.map(elemento => Object.entries(elemento))
    products.forEach(element => {
        const randInt = randomImage(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i <=3; i++){
            if(element.id == i){
                const shop_card = document.createRange().createContextualFragment(`
                    
                <div class="shop-card">
                    <img src="${jsonArr[randIndex][5][1]}" alt="">
                    <h2>baguette</h2>   
                </div>
                    
                    
                    `)
                    const shop_row = document.querySelector('.shop-row');
                    shop_row.append(shop_card);
            }
        }
    });

    function randomImage(min, max){
        return Math.floor(Math.random()* (max - min + 1) + min)
    }
}

getData()