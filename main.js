/**
 * Best price =1299
 * 16GB Ram price = 180
 * 512SSD = 100 and 1TB SSD = 180
 * Extra Delivery Charge = 20
 * promo 20% on Total amount
 */

/**
 * Default Memory Trigger
 */
document
  .getElementById("default-memory")
  .addEventListener("click", function (e) {
    getprice("extra-memmory", 0);
  });


/**
 * Extra Memory Trigger
 */
document.getElementById("extra-memory").addEventListener("click", function () {
  getprice("extra-memmory",180);
});

/** 
 * Default Storage Trigger
 */
document.getElementById("storage-256gb").addEventListener("click", function () {
  getprice("extra-storage", 0);
});

/**
 * 512 Storage Trigger
 */
document.getElementById("storage-512gb").addEventListener("click", function () {
  getprice("extra-storage", 100);
});

/**
 * 1TB Storage Trigger
 */
document.getElementById("storage-1tb").addEventListener("click", function () {
  getprice("extra-storage", 180);
});


/**
 * Free Delivery Trigger
 */
document.getElementById("free-delivery").addEventListener("click", function () {
  getprice("delivery-charge", 0);
});

/**
 * Extra Delivery Charge Trigger
 */
document.getElementById("extra-charge").addEventListener("click", function () {
    getprice("delivery-charge", 20);
});

/**
 * Promocode Trigger
 */
document.getElementById("user-promo").addEventListener("click", function () {
  managePromoCode();
});




/**
 * 
 * @param {keyId} triggerId 
 * @param {price} price 
 */
function getprice(triggerId,productPrice) {
    const price = document.getElementById(triggerId);
    price.innerText = productPrice;
    getBestPrice();
}





/**
 * Get total Price Calculations
 */

function getBestPrice() {

  const totalPrice = document.getElementById("total-price");
  const finalPrice = document.getElementById("finalPrice");

  const extraMemory = document.getElementById("extra-memmory");
  const extraStorage = document.getElementById("extra-storage");
  const deliveryCharge = document.getElementById("delivery-charge");

  const extramemoryPice = extraMemory.innerText
  const extraStoragePrice = extraStorage.innerText;
  const deliveryChargePrice = deliveryCharge.innerText;

  const bestPrice = 1299;
    let total_price =
      bestPrice +
      parseInt(extramemoryPice) +
      parseInt(extraStoragePrice) +
      parseInt(deliveryChargePrice);

    totalPrice.innerText = total_price;
    finalPrice.innerText = total_price;


}




/**
 * Manage Promo Code
 * @returns 
 */
function managePromoCode() {
    const promoErro = document.getElementById('promo-erro');
    const promoCode = document.getElementById('promo-code');
    const filterPromoCode = promoCode.value.toLowerCase();

    if (filterPromoCode == "stevekaku") {
      const totalPrice = document.getElementById("total-price");
      const finalPrice = document.getElementById("finalPrice");

      promoCode.value = "";
      promoErro.innerText = "";

      const getTotalPrice = parseInt(totalPrice.innerText);
      const updatedTotal = getTotalPrice - (getTotalPrice * 20) / 100;
      
      finalPrice.innerText = updatedTotal;
    } else {
      promoErro.innerText = "Please provied valid promo code";
    }

    return false;

}