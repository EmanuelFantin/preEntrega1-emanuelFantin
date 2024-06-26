document.getElementById('realizarPedido').addEventListener('click', function() {
const foods = [
        {name: "Pizza", price: 5000},
        {name: "Hamburguesa", price: 3000},
        {name: "Lomito de carne", price: 3500},
        {name: "Sandwich de milanesa", price: 3500},
        {name: "Papas fritas", price: 2000},
        {name: "Papas fritas / GRATINADAS", price: 2500}
    ];
    let order = [];
    let totalPrice = 0;

    alert("PEDIDOSYA / pedidos de comida rápida");

    let ordering = true;
    while (ordering) {
        let foodChoices = "Eliga su cena:\n";
        foods.forEach((food, index) => {
            foodChoices += `${index + 1}. ${food.name} ($${food.price.toFixed(2)})\n`;
        });
        foodChoices += `${foods.length + 1}. Hacer el pedido\n`;

        let choice = parseInt(prompt(foodChoices));

        if (choice > 0 && choice <= foods.length) {
            let quantity = parseInt(prompt(`¿Cuántas ${foods[choice - 1].name} quieres?`));
            if (quantity > 0) {
                order.push({item: foods[choice - 1].name, quantity: quantity, price: foods[choice - 1].price});
                totalPrice += foods[choice - 1].price * quantity;
            } else {
                alert("Cantidad rechazada.(haga su pedido)" );
            }
        } else if (choice === foods.length + 1) {
            ordering = false;
        } else {
            alert("Opción rechazada.(haga su pedido)" );
        }
    }

    if (order.length > 0) {
        let orderSummary = "Vista de su pedido:\n";
        order.forEach(item => {
            orderSummary += `${item.quantity} x ${item.item} ($${(item.price * item.quantity).toFixed(2)})\n`;
        });
        orderSummary += `Total a pagar: $${totalPrice.toFixed(2)}`;
        alert(orderSummary);
    } else {
        alert("No colocó ningún pedido.(haga su pedido)");
    }
});
