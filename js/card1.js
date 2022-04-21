let card = [ {
    poster: "poster.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 50,
    currency: 'руб.',
    sale_percent: 12.5,
    sale: true,
    sale_file: 'sale.png',
    type: "blu-ray.png",
    rating: '5.0',
    buy_button: "order.png"

},
{
    poster: "toy4.jpg",
    title1: "История игрушек 4",
    title2: "Приключения Вилкинса",
    price: 60,
    currency: 'руб.',
    sale_percent: 10,
    sale: true,
    sale_file: 'sale.png',
    
    rating: '3.0',
    buy_button: "order.png"

},

{
    poster: "ferd.jpg",
    title1: "Фердинанд",
    title2: "Побег из коровника",
    price: 40,
    currency: 'руб.',
    sale_percent: 10,
    sale: false,
    sale_file: 'sale.png',
   
    rating: '4.5',
    buy_button: "order.png"

}
];

// Вид основной стоимости 


// console.log(fullPrice);

// Вид акционной стоимости


// console.log(salePrice);





// Расчет рейтинга



// console.log(strs);


card.forEach((elem) => {

    
let fullPrice = `${elem.price},00 ${elem.currency}`;
let percent = Math.round(elem.price - (elem.price * (elem.sale_percent/100)));

let salePrice = `${percent},00 ${elem.currency} `;
let saleRes = '';
let sale_img = '';

if(elem.sale){
    saleRes = `<div>${salePrice}</div>
    <div>${fullPrice}</div>`;
    sale_img = "1";


}else {
saleRes = `<div>${fullPrice}</div>`;
sale_img = "0";
};

let strs = '';
/* let d = elem.rating;
let f = d.split(".");
f[1] = f[1]/10; */

let d = elem.rating;
let f = d.split(".");
f[1] = f[1]/10; 
f[0] = Number(f[0]);

for(i=1;i<=f[0];i++){
    strs += 'star ';
   
}
if(f[1] != 0)
strs+="star_half "

let h = Math.floor(5-Number(elem.rating));

for(n=1;n<=h;n++)
strs+="star_border "






/* for(i=1;i<=elem.rating;i++) {
    strs+="star ";

   
} */


let s = `
<div class="card">
<div class="poster">
    <img src="img/${elem.poster}" alt="">
    <img style = "opacity: ${sale_img}" src="img/${elem.sale_file}" alt="">
    <img src="img/${elem.type}" alt="">
</div>
<div class="title">
    <div>${elem.title1}</div>
    <div>${elem.title2}</div>
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
    
<img src="img/${elem.buy_button}" alt="">

</div>


</div> `;

cards.innerHTML += s;

});



console.log(f);





