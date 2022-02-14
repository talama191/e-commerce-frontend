import { Category } from "./category";

export interface Product{
  
    id: number;
    name: string;
    price: number;
    img1: string,
    img2: string,
    category:Category;
}