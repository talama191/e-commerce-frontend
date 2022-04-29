import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  longDescription: string;
  category: Category;
}
