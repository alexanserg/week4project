function Pizza (topping, size) {
  this.topping = [],
  this.size = size
}

Pizza.prototype.add = function () {
  this.topping.push($("#topping").val())
}
Pizza.prototype.big = function () {
  this.size = parseFloat($("input:radio[name=size]:checked").val());
}

Pizza.prototype.price = function () {
  return this.size * 5;
}


var pizza = new Pizza();


$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    pizza.topping = [];
    var topping = ($("#topping").val());
    var size = (parseFloat($("input:radio[name=size]:checked").val()))
    pizza.big(size);
    pizza.add(topping);
    $("#price").text("Your pizza with " + pizza.topping + " will be $" + pizza.price().toFixed(2));

  })
})
