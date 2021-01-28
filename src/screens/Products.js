import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
//import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import ModalForm from '../components/ModalForm';
import { Table, Button } from 'reactstrap';
import { deleteProduct } from '../actions/productActions';
function Products(props) {
  const products = useSelector(state => state.pds.products);
  const dispatch = useDispatch();
  const deleteAProduct = (product) =>{
    dispatch(deleteProduct(product))
  }
  let lists = products.map((product) => (
    <tr key={product._id}>
      <td>{product._id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.countInStock}</td>
      <td>{product.image}</td>
      <td>{product.brand}</td>
      <td>{product.description}</td>
      <td>
      <div style={{width:"110px"}}>
          <ModalForm buttonLabel={"Edit"} product={product}/>
          {' '}
          <Button color="danger" onClick={() => deleteAProduct(product)}>Del</Button>
        </div>
      </td>
    </tr>
  ));
  let res = (
    <Table responsive hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Count In Stock</th>
        <th>Image</th>
        <th>Brand</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        {lists}
    </tbody>
  </Table>);
  return(
        <div>
            {res}
            <ModalForm buttonLabel={"Add"} product={null}/>
        </div>
  );
}

export default Products;