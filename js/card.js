let card = {
    poster: "poster.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 50,
    currency: 'руб.',
    sale_percent: 12.5,
    sale: true,
    sale_file: 'sale.png',
    type: "blu-ray.png",
    rating: 4,
    buy_button: "order.png"

}


// Вид основной стоимости 

let fullPrice = `${card.price},00 ${card.currency}`;
console.log(fullPrice);

// Вид акционной стоимости

let percent = Math.round(card.price - (card.price * (card.sale_percent/100)));

let salePrice = `${percent},00 ${card.currency} `;
console.log(salePrice);

let saleRes = '';
let sale_img = '';
if(card.sale){
    saleRes = `<div>${salePrice}</div>
    <div>${fullPrice}</div>`;
    sale_img = "1";


}else {
saleRes = `<div>${fullPrice}</div>`;
sale_img = "0";
};



// Расчет рейтинга

let strs = '';
for(i=1;i<=card.rating;i++) {
    strs+="star ";
    
}
strs+="star_border";

console.log(strs);

let s = `
<div class="card">
<div class="poster">
    <img src="img/${card.poster}" alt="">
    <img style = "opacity: ${sale_img}" src="img/${card.sale_file}" alt="">
    <img src="img/${card.type}" alt="">
</div>
<div class="title">
    <div>${card.title1}</div>
    <div>${card.title2}</div>
</div>
<div class="price">
    ${saleRes}
</div>
<div class="stars">
    <span class="material-icons">
    ${strs}
        </span>
    
     
</div>
<div class="order">
    
<img src="img/${card.buy_button}" alt="">

</div>


</div> `;

cards.innerHTML = s;