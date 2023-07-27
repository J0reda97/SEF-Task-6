let products = document.querySelectorAll(".btn-main");
let calc = document.querySelector("#calc");
let cart = document.querySelector("#cart");
let result = document.querySelector("#result");

let totalPrice = 0;

products.forEach(function (product) {
  product.addEventListener("click", function () {
    // add to cart and increase the total price
    cart.innerHTML +=
      '<button price="' +
      product.getAttribute("price") +
      '" class="btn btn-main">' +
      product.innerHTML +
      "</button>";
    totalPrice += +product.getAttribute("price");

    // remove from cart and reduce the total price
    let cartBtns = cart.querySelectorAll(".btn-main");
    cartBtns.forEach(function (cartBtn) {
      cartBtn.addEventListener("click", function () {
        totalPrice -= +cartBtn.getAttribute("price");
        cartBtn.remove();
      });
    });
  });
});

// calculate total price
calc.onclick = function () {
  result.innerHTML = `<div class="alert alert-success" role="alert">
  Total Price is: <strong>${totalPrice}$</strong>
</div>`;
};

// Tooltip trigger
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
