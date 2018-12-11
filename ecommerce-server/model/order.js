// import mongoose from 'mongoose';

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema(
    {
        products: {
            type: {
                    name: {
                        type: String
                    },
                    amount: {
                        type: Number
                    },
                    price: {
                        type: Number
                    }
                }
        },
        address: {
            type: String
        },
        totalPrice: {
            type: Number
        },
        name: {
            type: String
        },
        shippingType: {
            type: String
        },
        shippingPrice: {
            type: Number
        },
        realized: {
            type: Boolean
        },
        message: {
            type: String
        }
    }
);

// export default mongoose.model('Product', Product);
module.exports = Order;