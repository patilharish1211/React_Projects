// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className='text-center'>Dashboard</h1>
      <Row>
        {products.map((el) => (
          <Col xs={12} sm={6} md={4} lg={4} key={el.id} className="mb-4 text-center">
            <h3>{el.title}</h3>
            <img src={el.image} alt={el.title} height={200} width={200}  />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
