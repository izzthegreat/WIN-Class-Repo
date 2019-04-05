var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
shoppingList.push ('froot loops')
shoppingList [4] = ('fair trade coffee')
shoppingList.splice (2, 2, 'rice', 'beans')
var shoppingCart = []
shoppingCart.push ( shoppingList.pop () )
shoppingCart.push ( shoppingList.shift () )
while ( shoppingList.length > 0 ) {
    shoppingCart.push ( shoppingList.shift() )
}
shoppingCart.sort ()
shoppingCart.reverse ()
console.log (shoppingCart.toString())