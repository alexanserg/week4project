// logic for Pizza

function Pizza (toppings, size) {
  this.toppings=[];
  this.size=size
}

Pizza.prototype.addToppings = function (toppings) {
  pizza.toppings=this.addTopping();
  this.toppings.push(topping)
  }
}


// logic for toppings

function Toppings (topping){
  this.topping=topping;
}


$(document).ready(function(event){
  $("#build").submit(function(event){
    event.preventDefault();
  $("input[name=toppings]:checked").change(function(){
    pizza.toppings();
  });
});
})
