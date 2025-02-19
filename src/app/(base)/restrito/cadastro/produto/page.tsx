
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import ProductFilter from './(components)/ProductFilter';
import ProductList from './(components)/ProductList';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
const dados:Product[] =[{
  id: 0,
  name: 'Mesa',
  category: 'categoria1',
  price: 10
},{
  id: 9,
  name: 'Mesa',
  category: 'categoria1',
  price: 10
},{
  id: 1,
  name: 'Mesa 1',
  category: 'categoria1',
  price: 10
},{
  id: 3,
  name: 'Mesa 2',
  category: 'categoria1',
  price: 10
},
{
  id: 4,
  name: 'Mesa 2',
  category: 'categoria1',
  price: 10
}
,{
  id: 5,
  name: 'Mesa 2',
  category: 'categoria1',
  price: 10
}
,{
  id: 6,
  name: 'Mesa 2',
  category: 'categoria1',
  price: 10
}
,{
  id: 7,
  name: 'Mesa 2',
  category: 'categoria1',
  price: 10
}
,{
  id: 8,
  name: 'Mesa 2',
  category: 'categoria1',
  price: 10
}
]
const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Substitua pela URL da sua API
    // axios.get('/api/products').then((response) => {
      setProducts(dados);
      setFilteredProducts(dados);
    // });
  }, []);

  const handleFilter = (filters: any) => {
    let filtered = products;
    console.log("Filter",filtered)
    if (filters.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );  
    }
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }
    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <ProductFilter onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </Container>
  );
};

export default ProductPage;
