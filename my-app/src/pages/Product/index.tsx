import { productservieses } from '../servieses/servieses';
import Productcard from '../component/productcard/product';

export async function getServerSideProps(context: any) {
  const searchItem = context.query.itm || '';
  try {
    const products = await productservieses.getproduct();
    const filteredProducts = products.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return {
      props: {
        filteredProducts,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        filteredProducts: [],
        error: 'Failed to load products. Please try again later.',
      },
    };
  }
}

export default function Products({ filteredProducts, error }: any) {
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Products</h1>
      <div>
        <Productcard product={filteredProducts} />
      </div>
    </div>
  );
}