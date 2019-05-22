import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
import React, { Component } from 'react';
async function getProductData() {

  // The await keyword saves us from having to write a .then() block.
  let res = await axios.get('/getdata01');

  // The result of the GET request is available in the json variable.
  // We return it just like in a regular synchronous function.
  return res.data;
}

async function addProductAction(product_name, product_price, image) {

  // The await keyword saves us from having to write a .then() block.
  let res = await axios.post('/add', { product_name, product_price, image });

  // The result of the GET request is available in the json variable.
  // We return it just like in a regular synchronous function.
  return res.data;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name: '',
      product_price: '',
      image: ''
    }
  }

  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data: res
        });
      });
    }
  }

  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) =>
        (
          <Product
            key={key}
            product_name={value.product_name}
            product_price={value.product_price}
            image={value.image}>
          </Product>
        )
      )
    }
  }

  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    var { product_name } = this.state;
    var { product_price } = this.state;
    var { image } = this.state;
    var dataTemp = [];
    var item = {};
    item.product_name = product_name;
    item.product_price = product_price;
    item.image = image;

    dataTemp = this.state.data;
    if(item.product_name !== ''){
      dataTemp.push(item);
      this.setState({
        data : dataTemp
      });
    }

    addProductAction(product_name, product_price, image).then((response) => {
      console.log(response);
    });
  }


  render() {
    return (
      <div>
        <HeadTitle></HeadTitle>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
                {this.printData()}
              </div>
            </div>
            <div className="col-2">
              <div className="row">
                <div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="product_name">Ten san pham</label>
                      <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhap ten san pham" />
                      <small id="name_text" className="form-text text-muted">Nhap text vo</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="product_price">Gia san pham</label>
                      <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhap gia san pham" />
                      <small id="name_text" className="form-text text-muted">Nhap gia vo</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Duong link anh</label>
                      <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhap link san pham" />
                      <small id="name_text" className="form-text text-muted">Nhap link vo</small>
                    </div>
                    <button type="reset" onClick={() => this.handleClick()} className="btn btn-info">Them moi</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;