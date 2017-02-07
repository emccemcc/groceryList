var groceryApple = {
  name: "Apple",
  price: 3.00
}

var groceryBananna = {
  name: "Bananna",
  price: 2.00
}

var groceryKiwi = {
  name: "Kiwi",
  price: 1.00
}
//stored value of array in object rather than array itself
/* method 1
var groceryArray = [groceryApple.name,
                    groceryApple.price,
                    groceryBananna.name,
                    groceryBananna.price,
                    groceryKiwi.name,
                    groceryKiwi.price];
*/
//trying to push instead




//method 1
/*
var sum = 0;
groceryArray.forEach(function (groceryList){
  console.log(groceryList);
  if (groceryList < 5){
    sum +=groceryList;
  }

});
console.log("The total amount for all these items is $" + sum);
*/
//method 2

var sum = 0;
var groceryArray = [];
groceryArray[0] = groceryApple;
groceryArray[1] = groceryBananna;
groceryArray[2] = groceryKiwi;

//console.log(groceryArray);

groceryArray.forEach(function(groceryFunction){
  console.log("Name: " +groceryFunction.name + " Price: $"+groceryFunction.price+".00");
  sum += groceryFunction.price;
});

console.log("Total Price: $"+sum+".00");
