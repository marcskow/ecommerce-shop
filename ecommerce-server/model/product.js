import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Product = new Schema(
    {
        name: {
            type: String
        },
        amount: {
            type: Number
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        avatar: {
            type: String
        },
        provider: {
            type: String
        },
        memory: {
            type: Number
        },
        dualsim: {
            type: Boolean
        },
        os: {
            type: String
        },
        externalMemory: {
            type: Boolean
        },
        screen: {
            type: Number
        },
        ram: {
            type: Number
        }
    }
);

export default mongoose.model('Product', Product);