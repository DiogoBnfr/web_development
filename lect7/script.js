function getPrice(element) {
        let priceText = element.innerText.replace(',', '.');
        return parseFloat(priceText);
}

function getQuantity(element) {
        return parseInt(element.innerText);
}

function updateRowTotal(row) {
        let priceElement = row.querySelector('.product-price span');
        let quantityElement = row.querySelector('.product-qtd span');
        let totalElement = row.querySelector('.product-total span');

        let price = getPrice(priceElement);
        let quantity = getQuantity(quantityElement);
        let total = price * quantity;

        totalElement.innerText = total.toFixed(2).replace('.', ',');
}

function updateTotalPurchase() {
        let rows = document.querySelectorAll(".table-row");
        let totalPriceElement = document.querySelector(".final-price span");
        let totalPrice = 0;

        rows.forEach(row => {
                productTotal = getPrice(row.querySelector(".product-total span"));
                totalPrice += productTotal;
        });

        totalPriceElement.innerText = totalPrice.toFixed(2).replace('.', ',');
}

function increase(button) {
        let row = button.closest('.table-row');
        let quantityElement = row.querySelector('.product-qtd span');
        let quantity = getQuantity(quantityElement) + 1;

        quantityElement.innerText = quantity;
        updateRowTotal(row);
        updateTotalPurchase();
}

function decrease(button) {
        let row = button.closest('.table-row');
        let quantityElement = row.querySelector('.product-qtd span');
        let quantity = getQuantity(quantityElement) - 1;

        if (quantity >= 0) {
                quantityElement.innerText = quantity;
                updateRowTotal(row);
                updateTotalPurchase();
        }
}
