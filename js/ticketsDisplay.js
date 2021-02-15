import { products, ui, Storage } from './products';





 // Fetch the products
 function productDisplay() {
  products.fetchProducts().then(products => {
    ui.displayProducts(products)
    Storage.saveProducts(products)

    // ui.setupAPP()
  }). then(() => {
    ui.getBagButtons()
  })
}

export { productDisplay };
