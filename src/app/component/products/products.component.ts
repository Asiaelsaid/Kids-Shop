import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Modules/discount-offers';
import { ICategory } from 'src/app/Modules/icategory';
import { IProduct } from 'src/app/Modules/iproduct';
import { Store } from 'src/app/Modules/store';
import { ProducteWithApiService } from 'src/app/Services/producte-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnChanges, OnInit {
  ProductList: IProduct[] = [];
  categoryList: ICategory[];
  isVisible: boolean = false;
  productListOfCat: IProduct[] = [];
  selecedCatID: number = 0;
  creitCardNumber: string = '';
  //// Day 3 [1]
  @Input() sentPrice: number = 0;
  productListOfPrice: IProduct[] = [];
  ////Day 3 [2]
  @Output() showTable: EventEmitter<IProduct>;

  //Day 1
  Discount = 'NoDiscount';
  ClientName: string = 'Asia';
  constructor(
    // private staticProductService: ProductsService,
    private router: Router,
    private productApiService: ProducteWithApiService
  ) {
    this.categoryList = [
      { ID: 1, Name: '0-3 Month' },
      { ID: 2, Name: '3-6 Month' },
      { ID: 3, Name: '6-9 Month' },
    ];
    //Day 3[2]
    this.showTable = new EventEmitter<IProduct>();
    this.creitCardNumber = '1234123412341234';
  }
  ngOnInit(): void {
    // this.filterProdCateogryById();
    //Day 3 [3]
    // this.ProductList = this.staticProductService.ProductList;
    //Day 5
    this.productApiService
    .getAllProduct()
    .subscribe((products) => {this.ProductList = products});

  }
  ngOnChanges(changes: SimpleChanges): void {
    // Day 3 [1]
    if (changes['sentPrice']) {
      this.priceSortFunction();
    }
    ///Day 3[3]
    // this.ProductList = this.staticProductService.ProductList;
    ///Day 4[1]
    // this.productListOfCat = this.staticProductService.getProductByCateogry();
    this.filterProdCateogryById();
    ///Day [5]
    this.productApiService
    .getProductByCategoryId(this.selecedCatID)
    .subscribe((products) =>{this.productListOfCat = products});
  }

  ///Day 1
  //   productStore:Store=new Store("mobile shop",["branchOne","branchTwo","branchThree"],"https://w7.pngwing.com/pngs/108/412/png-transparent-e-commerce-flat-design-illustration-mobile-shopping-mall-man-text-service-people.png");
  // Product:IProduct={
  //   ID: 105,
  //   Name:"Iphone 12",
  //   Quantity:5,
  //   Price:25000,
  //   Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZzCnks8pgrWUZJc9ulP7G7VJK2Kr6gSePw&usqp=CAU",
  // CateogryID:2,
  // Discount:DiscountOffers.Two
  // }
  ////Day 2
  // ProductList: IProduct[] = [
  //   {
  //     ID: 105,
  //     Name: 'PRINTED SLEEVELESS JUMPSUIT',
  //     Quantity: 2,
  //     Price: 280,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231267_360x.jpg?v=1678798476',
  //     //  CateogryID:{ID:5,Name:"0-3"},
  //     CateogryID: 3,
  //     Discount: DiscountOffers.one,
  //   },
  //   {
  //     ID: 107,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 2,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123183003_1_360x.jpg?v=1678716690 ',
  //     CateogryID: 2,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 109,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 5,
  //     Price: 290,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123174303_1_360x.jpg?v=1678783724',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Three,
  //   },
  //   {
  //     ID: 111,
  //     Name: 'PRINTED SHORT SLEEVES PAJAMA SET 2 PIECES',
  //     Quantity: 0,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123178303_1_360x.jpg?v=1678791545',
  //     CateogryID: 1,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 113,
  //     Name: 'PRINTED SLEEVELESS JUMPSUIT',
  //     Quantity: 3,
  //     Price: 280,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123182903_1_360x.jpg?v=1678716589',
  //     CateogryID: 2,
  //     Discount: DiscountOffers.Three,
  //   },
  //   {
  //     ID: 115,
  //     Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
  //     Quantity: 5,
  //     Price: 290,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231306_360x.jpg?v=1678965290',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 117,
  //     Name: 'PRINTED LONG SLEEVE PAJAMA SET 2 PIECES',
  //     Quantity: 3,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231336_360x.jpg?v=1678802099',
  //     CateogryID: 1,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 119,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 2,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123176203_1_360x.jpg?v=1678717474',
  //     CateogryID: 2,
  //     Discount: DiscountOffers.Three,
  //   },
  //   {
  //     ID: 121,
  //     Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
  //     Quantity: 1,
  //     Price: 310,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/1344_360x.jpg?v=1678799218',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Three,
  //   },
  //   {
  //     ID: 123,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 2,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123173303_1_360x.jpg?v=1678792300 ',
  //     CateogryID: 1,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 125,
  //     Name: 'PRINTED SLEEVELESS JUMPSUIT + BODY',
  //     Quantity: 5,
  //     Price: 280,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231249_360x.jpg?v=1678966326 ',
  //     CateogryID: 2,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 127,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 2,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123170203_1_360x.jpg?v=1678702296',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 129,
  //     Name: 'PRINTED SLEEVELESS JUMPSUIT + BODY',
  //     Quantity: 5,
  //     Price: 310,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231276_360x.jpg?v=1678799743',
  //     CateogryID: 2,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 131,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 3,
  //     Price: 290,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123176303_1_360x.jpg?v=1678782319',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 133,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 2,
  //     Price: 290,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123181303_1_360x.jpg?v=1678788980',
  //     CateogryID: 1,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 135,
  //     Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
  //     Quantity: 1,
  //     Price: 360,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/21231324_360x.jpg?v=1679131051',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Three,
  //   },
  //   {
  //     ID: 137,
  //     Name: 'PRINTED SHORT SLEEVE PAJAMA SET 2 PIECES',
  //     Quantity: 0,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123171303_1_360x.jpg?v=1678793785',
  //     CateogryID: 1,
  //     Discount: DiscountOffers.Three,
  //   },
  //   {
  //     ID: 139,
  //     Name: 'CHECKS SLEEVELESS JUMPSUIT',
  //     Quantity: 2,
  //     Price: 250,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/231102551_360x.jpg?v=1681557506',
  //     CateogryID: 2,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 141,
  //     Name: 'SHORT SLEEVE POLO DRESS JACQUARD CELLS',
  //     Quantity: 2,
  //     Price: 310,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/212317710303_1_360x.jpg?v=1678703948',
  //     CateogryID: 3,
  //     Discount: DiscountOffers.Two,
  //   },
  //   {
  //     ID: 143,
  //     Name: 'PRINTED SLEEVELESS PAJAMA SET 2 PIECES',
  //     Quantity: 0,
  //     Price: 260,
  //     Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123179303_1_360x.jpg?v=1678787396',
  //     CateogryID: 1,
  //     Discount: DiscountOffers.Two,
  //   },
  // ];
  ////Day 2
  toToggle() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
  ///Day 2
  addToCart(item: IProduct) {
    item.Quantity -= 1;
    //  console.log(item.Quantity);
    //  console.log(item);
    this.showTable.emit(item);
  }
  //Day 2
  filterProdCateogryById() {
    if (this.selecedCatID == 0) {
      this.productListOfCat = this.ProductList;
    } else {
      this.productListOfCat = this.ProductList.filter(
        (pro) => pro.CateogryID == this.selecedCatID
      );
    }
  }
  //Day 3 [1]
  priceSortFunction() {
    if (this.sentPrice == 0) {
      this.productListOfPrice = this.ProductList;
    } else {
      this.productListOfCat = this.ProductList.filter(
        (pro) => pro.Price <= this.sentPrice
      );
    }
  }
  ///Day 4
  productDetails(proId: number) {
    this.router.navigate(['Product', proId]);
  }
  editProduct(proId: number){
    this.router.navigate(['edit', proId]);
  }
}
