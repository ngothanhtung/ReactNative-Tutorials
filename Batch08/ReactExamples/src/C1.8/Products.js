import React, { Component } from 'react';
import './Products.css';

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='image'></div>
        <div className='main'>
          <div>
            <strong>Kids Jumpsuit</strong>
          </div>
          <div className='product-price'>
            <div>
              <span className='price'>$39.00</span>
            </div>
            <div>
              <span>In stock</span>
            </div>
          </div>
          <div>
            <div className='product-color'></div>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default class Products extends Component {
  render() {
    return (
      <div>
        <Product></Product>
      </div>
    );
  }
}
