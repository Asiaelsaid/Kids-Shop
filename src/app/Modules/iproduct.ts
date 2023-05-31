import { DiscountOffers } from "./discount-offers";
import { ICategory } from "./icategory";
export interface IProduct {
    id:number,
    Name:string,
    Quantity:number,
    Price:number,
    Img:string,
//  CateogryID:ICategory,
 CateogryID?:number,
 Discount?:DiscountOffers,
 Details?:string
}
