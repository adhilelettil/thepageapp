import { servicebase } from "./serviesbase";
export class productservieses extends servicebase {
   static getproduct = async ()=>{
    const productsResp = await fetch(this.geturl("/products?populate=*"));
   
    if (!productsResp.ok) {
      throw new Error(`HTTP error! status: ${productsResp.status}`);
    }
    const products = await productsResp.json();
    return products.data;
   }


   static getproductbyid =async  (id :string) => {
    const productRespo = await fetch(this.geturl(`/products/${id}?populate=*`));
   
    if (!productRespo.ok) {
      throw new Error(`HTTP error! status: ${productRespo.status}`);
    }
    const product = await productRespo.json();
    return product.data; 
  
  };
}

