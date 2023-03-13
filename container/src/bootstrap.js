import { mount as productsMount } from 'productsApp/ProductsIndex'
import { mount as cartMount } from 'cartApp/CartShow'

console.log('Container!')

productsMount(document.querySelector('#container-products'))
cartMount(document.querySelector('#container-cart'))