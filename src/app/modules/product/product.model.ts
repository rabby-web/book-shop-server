import mongoose, { Schema } from 'mongoose';
import { TProduct } from './product.interface';


const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    publisher: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    language: { type: String, required: true },
    pages: { type: Number, required: true },
    rating: { type: Number, required: true },
    quantity: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    discount: { type: Number, default: 0 },
 
  },
  { timestamps: true }, 
);


const Product = mongoose.model<TProduct>('Product', ProductSchema);

export default Product;
