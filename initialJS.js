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

var groceryArray = [groceryApple.name,
                    groceryApple.price,
                    groceryBananna.name,
                    groceryBananna.price,
                    groceryKiwi.name,
                    groceryKiwi.price];

var sum = 0;

groceryArray.forEach(function (groceryList){
  console.log(groceryList);
  if (groceryList < 5){
    sum +=groceryList;
  }

});

console.log(sum);
