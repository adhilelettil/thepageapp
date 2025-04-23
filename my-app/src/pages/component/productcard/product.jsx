'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './product.module.css'; 
import Input from '../input/Input';

export default function productcard(props) {
  const [sproducts, setfilterproduct] = useState('');
  const product = props.product || []; 
  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(sproducts)
  );

  function searchProduct(e) {
    const searchValue = e;
    setfilterproduct(searchValue);
  }

  return (
    <div>
      <div className={styles.dropdown}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          category
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/Product/?itm=i phone">
              i phone
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/Product/?itm=watch">
              watch
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/Product/?itm=samsung">
              samsung
            </a>
          </li>
        </ul>
      </div>
      <Input searchProduct={searchProduct} />
      <div className={styles.navItem}>
        {/* Additional content can go here */}
      </div>

      <div className={styles.productlist}>
        {filteredProducts.map((item) => (
          <div key={item.id} >
            <Link href={`/Product/${item.documentId}`}>
              <div className={styles.imagee}>
                <img
                  src={item.image[0].url}
                  className="img-fluid"
                  alt={item.name}
                />
              </div>
            </Link>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5>{item.title}</h5>
                <h1 className={styles.price}>{item.price}</h1>
                <h2>{item.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}