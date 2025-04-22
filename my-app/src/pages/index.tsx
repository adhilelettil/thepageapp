import { productservieses } from "../servieses/servieses";
import Link from "next/link";


export async function getServerSideProps() {
  try {
    const prod = await productservieses.getproduct();
    const filteredmensproduct = prod.filter((item: { name: string }) =>
      item.name.toLowerCase().includes("i phone")
    );
    const filteredmensproductwatch = prod.filter((item: { name: string }) =>
      item.name.toLowerCase().includes("watch")
    );

    return {
      props: {
        prod,
        filteredmensproduct,
        filteredmensproductwatch,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        prod: [],
        filteredmensproduct: [],
        filteredmensproductwatch: [],
        error: "Failed to load products. Please try again later.",
      },
    };
  }
}

export default function Home({
  prod,
  filteredmensproduct,
  filteredmensproductwatch,
  error,
}: any) {
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }
 return (
    
<div>

<div id="carouselExample" className="carousel slide " style={{margin:"10px"  } }>
  <div className="carousel-inner" style={{height:"350px"}}>
    <div className="carousel-item active" >
      <img src="3.jpg" className="d-block w-100" alt="..."/ >
    </div>
    <div className="carousel-item">
      <img src="/1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/2.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
        <h1>phone </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredmensproduct.map((item: any) => (
            <div key={item.id} className="mainitm">
              <Link href={`/Product/${item.documentId}`} className="imag">
              <img src={item.image [0].url} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} /></Link>
              
              
                



              <p>{item.price}</p>
            </div>
            ))}
        </div>
      </div>
       
   
       <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
        <h1>watch</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredmensproductwatch.map((item: any) => (
            <div key={item.id} className="mainitm">
             <Link href={`/Product/${item.id}`}className="imag" >
              <img src={item.image [0].url}  alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} /></Link>
                
              <p >{item.price}</p>
            </div>
            ))}
        </div>
      </div>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
        <h1>All product</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {prod.map((item: any) => (
            <div key={item.id} className="mainitm">
             <Link href={`/Product/${item.documentId}`}className="imag">
              <img src={item.image [0].url} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }}
               /></Link>
              
                {/* <p>{item.title}</p> */}
              <p>{item.price}</p>
            </div>
            ))}
        </div>
      </div>
     
 </div>


  );
}
