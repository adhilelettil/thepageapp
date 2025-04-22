import { useRouter } from "next/router";
import { productservieses } from "../../servieses/servieses"; // Corrected the import path
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Productdetail(props: any) {
  const [product, setProduct] = useState<{
    image?: { url: string }[];
    name?: string;
    price?: string;
    description?: { children?: { text: string }[] }[];
  }>({ image: [] });
  const [productId, setProductId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { productid } = router.query;
      setProductId(productid as string);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    async function fetchProduct() {
      if (productId) {
        try {
          const productData = await productservieses.getproductbyid(productId);
          setProduct(productData);
        } catch (error) {
          console.error("Error fetching product:", error);
          setError("Failed to fetch product details. Please try again later.");
        }
      }
    }
    fetchProduct();
  }, [productId]);

  function addcart() {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6">
          {product.image && product.image[0] ? (
            <img
              src={product.image[0].url}
              className="img-fluid rounded"
              alt={product.name || "Product Image"}
            />
          ) : (
            <p>Image not available</p>
          )}
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h1 className="text-primary">{product.name || "Unnamed Product"}</h1>
          <h2 className="text-danger">{product.price || "Price not available"}</h2>
          <div>
            {product.description && product.description.length > 0 ? (
              product.description.map((desc, index) => (
                <p key={index}>
                  {desc.children?.[0]?.text || "Description not available"}
                </p>
              ))
            ) : (
              <p>Description not available</p>
            )}
          </div>
          <button className="btn btn-warning mt-3" onClick={addcart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}