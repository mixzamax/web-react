import React, { Component } from 'react'
import './Body.css'
import firebase from '../firebase/firebase'


class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            product_id: '',
            name: '',
            info: ''
        }
    }
    componentDidMount() {
        const productsRef = firebase.database().ref('products');
        productsRef.on('value', (snapshot) => {
            let products = snapshot.val();
            let newState = [];

            for (let product in products) {
                newState.push({
                    product_id: product,
                    name: products[product].name,
                    info: products[product].info
                })
            }
            this.setState({
                products: newState
            })
        })
    }

    render() {
        return (
            <div className="Body">
                {
                    this.state.products.map((product) => {
                        return (
                            <a className="item" href="#">
                                <div className="item-pic">

                                </div>
                                <div className="item-name">
                                    <h4>{product.name}</h4>
                                </div>
                                <div className="item-info">
                                    <h6>{product.info}</h6>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        );
    }
}

export default Body;