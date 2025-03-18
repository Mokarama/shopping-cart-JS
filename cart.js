/**
 * 100------->100
 * 101-200--->90
 * 201-300--->80
 * 301-400--->70
 * 401-500--->60
 * 501-600--->50
 */


function shoppingCart(quantity) {
    
if(quantity<=100){
    return quantity *100;
    
}
else if(quantity<=200){
    const first100ProductPrice=100 *100;
    const remainProduct = quantity -100;
    const remainProductPrice=remainProduct * 90;
    const total = first100ProductPrice + remainProductPrice ;
    return total;
}
else if(quantity<=300){
    const first100ProductPrice =100 * 100;
    const second100ProductPrice =100 * 90;
    const remainProduct = quantity -200;
    const remainProductPrice =remainProduct * 80;
    const total =first100ProductPrice +second100ProductPrice+ remainProductPrice;
    return total;

}

else if(quantity<=400){
    const first100ProductPrice =100 * 100;
    const second100ProductPrice =100 * 90;
    const thrid100ProductPrice =100 * 80;
    const remainProduct = quantity -300;
    const remainProductPrice =remainProduct * 70;
    const total =first100ProductPrice + second100ProductPrice + thrid100ProductPrice + remainProductPrice;
    return total;
}

else if(quantity<=500){
    const first100ProductPrice =100 * 100;
    const second100ProductPrice =100 * 90;
    const thrid100ProductPrice =100 * 80;
    const fourth100ProductPrice =100 * 70;
    const remainProduct = quantity -400;
    const remainProductPrice =remainProduct * 60;
    const total =first100ProductPrice+second100ProductPrice+thrid100ProductPrice+ fourth100ProductPrice + remainProductPrice;
    return total;
}

else{
    const first100ProductPrice =100 * 100;
    const second100ProductPrice =100 * 90;
    const thrid100ProductPrice =100 * 80;
    const fourth100ProductPrice =100 * 70;
    const five100ProductPrice = 100 * 60;
    const remainProduct = quantity -500;
    const remainProductPrice =remainProduct * 50;
    const total =first100ProductPrice+ second100ProductPrice + thrid100ProductPrice+ fourth100ProductPrice +five100ProductPrice+ remainProductPrice;
    return total;
}

};

const cart =shoppingCart(900);
console.log(cart);