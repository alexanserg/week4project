function Pizza (topping, size) {
  this.topping = [],
  this.size =  parseFloat($("input:radio[name=size]:checked").val());
}


Pizza.prototype.cost = function () {
  return  (this.topping.length * .5) + (this.size * 5);
}






$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    toppings = pizza.topping;

    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var output = pizza.cost().toFixed(2);
    console.log(pizza.size);
    if (output >= 5) {
      $("#price").text("Your pizza with " + toppings + " will be" + "$" + output);
    }  else {
      $("#price").text("Please select toppings and Size");
    }
  });
});
