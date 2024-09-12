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

async function getDataTestimonials(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    character.results.forEach(element => {
        for(i = 0; i <= 3; i++){
            if(element.id == i){
                const testimonial_card = document.createRange().createContextualFragment(`
                    
                    <div class="testimonial-card">
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aliquid error iste odio vero quam officiis iusto expedita quos minus veniam nobis sint qui ratione soluta, alias corrupti! Ex, porro?</p>
                    <img src="${element.image}" alt="" />
                    <h4>${element.name}</h4>
                </div>
                                 
                    `)

                    const testimonial_row = document.querySelector('.testimonial-row');
                    testimonial_row.append(testimonial_card);
            }
        }
    })
}

const btn_validar = document.getElementById('btn-validar');
const validar = (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const correo = "Email"
    if(email.value == ""){
        swal({
            title: `El campo ${correo} no puede estar vacío`,
            icon: "error",
             })
        return false;
    }
    if(!mailValido(email.value)){
        swal({
            title: `El campo ${correo} no tiene el formato correcto`,
            icon: "error",
             })
        return false;
    }
    swal({
        title: `Correo enviado satisfactoriamente`,
        icon: "success",
         })
    email.value = "";
    return true;
}

const mailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
btn_validar.addEventListener("click", validar)
getDataTestimonials()
getData()
