import axios from 'axios';

// Getting products
class Products {
  async fetchProducts() {
    try {
      // let response = await fetch("products.json")
      // console.log(response)
      // let data = await response.text();
      let response = await axios.get('products.json');
     console.log(response)
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}
// display products
class UI {

}

// local storage 
class Storage {}


export { Products, UI, Storage };
