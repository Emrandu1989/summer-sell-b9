console.log('index.js connected')
let totalPrice = 0;
let titleCount = 1;

const cards = document.querySelectorAll('.card');
// console.log(cards)

for(const card of cards){
    // console.log(card);
    card.addEventListener('click', function(){
        const title = card.querySelector('h3').innerText;
       const price = parseFloat(card.querySelector('span').innerText.split(" ")[1]);
    const titleContainer = document.getElementById('title-container');
    console.log(titleContainer);
    const p = document.createElement('p');
    p.innerText = titleCount + ". " +  title;
    titleContainer.appendChild(p);
    titleCount++;

    totalPrice += price;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

       
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    console.log(couponCode);

    if(couponCode === "SELL200"){
        if(totalPrice >= 200){
            let  discountElement = document.getElementById('discountPrice');
           const discountPrice = totalPrice * 0.2;
          
            discountElement.innerText = discountPrice.toFixed(2);
            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discountPrice;

        }else{
            alert('You have to purchase at least 200 tk')
        }
    }else{
        alert('Invalid couponCode')
    }
     
})

