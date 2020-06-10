import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Product } from './types.ts'

let products: Product[] = [
    {
      id: "1",
      name: "Product One",
      description: "This is product one",
      price: 99.99,
    },
    {
      id: "2",
      name: "Product Two",
      description: "This is product two",
      price: 150.99,
    },
    {
      id: "3",
      name: "Product Three",
      description: "This is product three",
      price: 199.99,
    },
  ];
const getProducts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: products
    }
}
export {getProducts}
