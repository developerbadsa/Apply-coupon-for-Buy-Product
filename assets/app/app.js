document.getElementById('couponApply').addEventListener('click', function() {
    const discount = 30;
    const inputCoupon = document.getElementById('couponField');
    const productPrice = Number(document.getElementById('productPrice').innerText);
    const payBtn = document.getElementById('payBtn');


    if (inputCoupon.value === 'd30n') {
        const discountPrice = productPrice - (productPrice * discount) / 100;
        payBtn.innerText = discountPrice;

    } else {
        alert('please insert a valid coupon code')
    }

    inputCoupon.value = '';



})