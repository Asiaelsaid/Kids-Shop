import { Injectable } from '@angular/core';
import { IProduct } from '../Modules/iproduct';
import { DiscountOffers } from '../Modules/discount-offers';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ProductList: IProduct[] = [];
  cateogryID: number = 0;
  constructor() {
    this.ProductList = [
      {
        id: 105,
        Name: 'PRINTED SLEEVELESS JUMPSUIT',
        Quantity: 2,
        Price: 280,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231267_360x.jpg?v=1678798476',
        CateogryID: 3,
        Discount: DiscountOffers.one,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 107,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 2,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123183003_1_360x.jpg?v=1678716690 ',
        CateogryID: 2,
        Discount: DiscountOffers.Two,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 109,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 5,
        Price: 290,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123174303_1_360x.jpg?v=1678783724',
        CateogryID: 3,
        Discount: DiscountOffers.Three,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 111,
        Name: 'PRINTED SHORT SLEEVES PAJAMA SET 2 PIECES',
        Quantity: 0,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123178303_1_360x.jpg?v=1678791545',
        CateogryID: 1,
        Discount: DiscountOffers.Two,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 113,
        Name: 'PRINTED SLEEVELESS JUMPSUIT',
        Quantity: 3,
        Price: 280,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123182903_1_360x.jpg?v=1678716589',
        CateogryID: 2,
        Discount: DiscountOffers.Three,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 115,
        Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
        Quantity: 5,
        Price: 290,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231306_360x.jpg?v=1678965290',
        CateogryID: 3,
        Discount: DiscountOffers.Two,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 117,
        Name: 'PRINTED LONG SLEEVE PAJAMA SET 2 PIECES',
        Quantity: 3,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231336_360x.jpg?v=1678802099',
        CateogryID: 1,
        Discount: DiscountOffers.Two,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 119,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 2,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123176203_1_360x.jpg?v=1678717474',
        CateogryID: 2,
        Discount: DiscountOffers.Three,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 121,
        Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
        Quantity: 1,
        Price: 310,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/1344_360x.jpg?v=1678799218',
        CateogryID: 3,
        Discount: DiscountOffers.Three,
        Details:
          ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 123,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 2,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123173303_1_360x.jpg?v=1678792300 ',
        CateogryID: 1,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 125,
        Name: 'PRINTED SLEEVELESS JUMPSUIT + BODY',
        Quantity: 5,
        Price: 280,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231249_360x.jpg?v=1678966326 ',
        CateogryID: 2,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 127,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 2,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123170203_1_360x.jpg?v=1678702296',
        CateogryID: 3,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 129,
        Name: 'PRINTED SLEEVELESS JUMPSUIT + BODY',
        Quantity: 5,
        Price: 310,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231276_360x.jpg?v=1678799743',
        CateogryID: 2,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 131,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 3,
        Price: 290,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123176303_1_360x.jpg?v=1678782319',
        CateogryID: 3,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 133,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 2,
        Price: 290,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123181303_1_360x.jpg?v=1678788980',
        CateogryID: 1,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 135,
        Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
        Quantity: 1,
        Price: 360,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231324_360x.jpg?v=1679131051',
        CateogryID: 3,
        Discount: DiscountOffers.Three,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 137,
        Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
        Quantity: 0,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123171303_1_360x.jpg?v=1678793785',
        CateogryID: 1,
        Discount: DiscountOffers.Three,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 139,
        Name: 'CHECKS SLEEVELESS JUMPSUIT',
        Quantity: 2,
        Price: 250,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/231102551_360x.jpg?v=1681557506',
        CateogryID: 2,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 141,
        Name: 'SHORT SLEEVE POLO DRESS JACQUARD CELLS',
        Quantity: 2,
        Price: 310,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/212317710303_1_360x.jpg?v=1678703948',
        CateogryID: 3,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
      {
        id: 143,
        Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
        Quantity: 0,
        Price: 260,
        Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123179303_1_360x.jpg?v=1678787396',
        CateogryID: 1,
        Discount: DiscountOffers.Two,
        Details:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ea nam eosdolore optio? Doloremque totam maiores itaque rem expedita saepe optio fugaFFplaceat sequi, dicta labore facere odio molestias.',
      },
    ];
  }
  getAllProduct(): IProduct[] {
    return this.ProductList;
  }
  getProductByCateogry(): IProduct[] {
    if (this.cateogryID == 0) {
      return this.ProductList;
    } else {
      return this.ProductList.filter(
        (pro) => pro.CateogryID == this.cateogryID
      );
    }
  }
  getProductById(productId: number): IProduct | null {
    let foundProduct = this.ProductList.find((pro) => pro.id == productId);
    return foundProduct ? foundProduct : null;
  }
  getAllIdsOfProduct(): number[] {
    return this.ProductList.map((pro) => pro.id);
  }
}
