const products = {
  'Groceries': {
    'Groceries1': {'name': 'Product 1', 'brand': 'Brand of Product 1', 'price': 10.00},
    'Groceries2': {'name': 'Product 2', 'brand': 'Brand of Product 2', 'price': 20.00},
    'Groceries3': {'name': 'Product 3', 'brand': 'Brand of Product 3', 'price': 30.00},
    'Groceries4': {'name': 'Product 4', 'brand': 'Brand of Product 4', 'price': 40.00},
    'Groceries5': {'name': 'Product 5', 'brand': 'Brand of Product 5', 'price': 50.00},
    'Groceries6': {'name': 'Product 6', 'brand': 'Brand of Product 6', 'price': 60.00},
    'Groceries7': {'name': 'Product 7', 'brand': 'Brand of Product 7', 'price': 70.00},
    'Groceries8': {'name': 'Product 8', 'brand': 'Brand of Product 8', 'price': 80.00}
  },

  'Exhibition_Special': {
    'Exhibition_Special1': {'name': 'Product 1', 'brand': 'Brand of Product 1', 'price': 10.00},
    'Exhibition_Special2': {'name': 'Product 2', 'brand': 'Brand of Product 2', 'price': 20.00},
    'Exhibition_Special3': {'name': 'Product 3', 'brand': 'Brand of Product 3', 'price': 30.00},
    'Exhibition_Special4': {'name': 'Product 4', 'brand': 'Brand of Product 4', 'price': 40.00},
    'Exhibition_Special5': {'name': 'Product 5', 'brand': 'Brand of Product 5', 'price': 50.00},
    'Exhibition_Special6': {'name': 'Product 6', 'brand': 'Brand of Product 6', 'price': 60.00},
    'Exhibition_Special7': {'name': 'Product 7', 'brand': 'Brand of Product 7', 'price': 70.00},
    'Exhibition_Special8': {'name': 'Product 8', 'brand': 'Brand of Product 8', 'price': 80.00},
    'Exhibition_Special9': {'name': 'Product 9', 'brand': 'Brand of Product 9', 'price': 90.00},
    'Exhibition_Special10': {'name': 'Product 10', 'brand': 'Brand of Product 10', 'price': 100.00},
    'Exhibition_Special11': {'name': 'Product 11', 'brand': 'Brand of Product 11', 'price': 110.00},
    'Exhibition_Special12': {'name': 'Product 12', 'brand': 'Brand of Product 12', 'price': 80.00}
  },

  'Mens': {
    'Mens1': {'name': 'Product 1', 'brand': 'Brand of Product 1', 'price': 10.00},
    'Mens2': {'name': 'Product 2', 'brand': 'Brand of Product 2', 'price': 20.00},
    'Mens3': {'name': 'Product 3', 'brand': 'Brand of Product 3', 'price': 30.00},
    'Mens4': {'name': 'Product 4', 'brand': 'Brand of Product 4', 'price': 40.00},
    'Mens5': {'name': 'Product 5', 'brand': 'Brand of Product 5', 'price': 50.00},
    'Mens6': {'name': 'Product 6', 'brand': 'Brand of Product 6', 'price': 60.00},
    'Mens7': {'name': 'Product 7', 'brand': 'Brand of Product 7', 'price': 70.00},
    'Mens8': {'name': 'Product 8', 'brand': 'Brand of Product 8', 'price': 80.00}
  },


  'Womens': {
    'Womens1': {'name': 'Product 1', 'brand': 'Brand of Product 1', 'price': 10.00},
    'Womens2': {'name': 'Product 2', 'brand': 'Brand of Product 2', 'price': 20.00},
    'Womens3': {'name': 'Product 3', 'brand': 'Brand of Product 3', 'price': 30.00},
    'Womens4': {'name': 'Product 4', 'brand': 'Brand of Product 4', 'price': 40.00},
    'Womens5': {'name': 'Product 5', 'brand': 'Brand of Product 5', 'price': 50.00},
    'Womens6': {'name': 'Product 6', 'brand': 'Brand of Product 6', 'price': 60.00},
    'Womens7': {'name': 'Product 7', 'brand': 'Brand of Product 7', 'price': 70.00},
    'Womens8': {'name': 'Product 8', 'brand': 'Brand of Product 8', 'price': 80.00}
  },

  'Shoes': {
    'Shoes1': {'name': 'Product 1', 'brand': 'Brand of Product 1', 'price': 10.00},
    'Shoes2': {'name': 'Product 2', 'brand': 'Brand of Product 2', 'price': 20.00},
    'Shoes3': {'name': 'Product 3', 'brand': 'Brand of Product 3', 'price': 30.00},
    'Shoes4': {'name': 'Product 4', 'brand': 'Brand of Product 4', 'price': 40.00},
    'Shoes5': {'name': 'Product 5', 'brand': 'Brand of Product 5', 'price': 50.00},
    'Shoes6': {'name': 'Product 6', 'brand': 'Brand of Product 6', 'price': 60.00},
    'Shoes7': {'name': 'Product 7', 'brand': 'Brand of Product 7', 'price': 70.00},
    'Shoes8': {'name': 'Product 8', 'brand': 'Brand of Product 8', 'price': 80.00}
  }
}
const product = products.find((p) => p.name === productName);
