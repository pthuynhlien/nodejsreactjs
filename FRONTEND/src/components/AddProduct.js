import React, { Component } from 'react';
import axios from 'axios';

// const addProductAction = (product_name, product_price, image) => {
//     (axios.post('/add', {product_name, product_price, image})
//     .then((resp) => resp.data))
// }

async function addProductAction(product_name, product_price, image) {

    // The await keyword saves us from having to write a .then() block.
    let res = await axios.post('/add', {product_name, product_price, image});
  
    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return res.data;
  }

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price : '',
            image : ''
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    handleClick = () => {
        console.log(JSON.stringify(this.state));
        var {product_name} = this.state;
        var {product_price} = this.state;
        var {image} = this.state;

        // addProductAction(product_name, product_price, image).then((response) => {
        //     console.log(response);
        // })
        addProductAction(product_name, product_price, image).then((response) => {
            console.log(response);
          });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <hr />
                </div>
                <div className="col-8 mx-auto">
                    <form>
                    <div className="form-group">
                        <label htmlFor="product_name">Ten san pham</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhap ten san pham" />
                        <small id="name_text" className="form-text text-muted">Nhap text vo</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product_price">Gia san pham</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhap gia san pham" />
                        <small id="name_text" className="form-text text-muted">Nhap gia vo</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Duong link anh</label>
                        <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhap link san pham" />
                        <small id="name_text" className="form-text text-muted">Nhap link vo</small>
                    </div>
                    <button type="reset" onClick = {()=>this.handleClick()} className="btn btn-info">Them moi</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;