import { Component, OnDestroy, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Subscription, filter, map } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { DiscountOffers } from 'src/app/Modules/discount-offers';
import { IProduct } from 'src/app/Modules/iproduct';
import { Store } from 'src/app/Modules/store';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private Subscriptions!: Subscription[];
  ClientName: string = 'Asia';
  constructor(private promoAds: PromotionAdsService) {}

  ngOnInit(): void {
    // using creat
    // let observer={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(error:string)=>{
    //     console.log(error);

    //   },
    //   complete:()=>{
    //     console.log("Ads is finsihed");

    //   }
    // }
    //creat
    //  this.promoAds.getSheduledAds(3).subscribe(observer);
    let adsSubscription: Subscription = this.promoAds
      .getSheduledAds(1)
      .subscribe({
        next: (data: string) => {
          console.log(data);
        },
        error: (error: string) => {
          console.log(error);
        },
        complete: () => {
          console.log('Ads is finsihed');
        },
      });
    // this.Subscriptions.push(adsSubscription);

    //using operator creating
    let sub=this.promoAds.getSerialAds().subscribe(ad=>{console.log(ad);}
    )

    ///filter operation
    let filtersObservable=this.promoAds.getSheduledAds(3).pipe(
      filter(ad=>ad.includes("White Firday")),
      map(ad=>" Ad :"+ ad),
    )
  // let sub= filtersObservable.subscribe(observer)
  //   this.Subscriptions.push(sub);

}
ngOnDestroy(): void {
    for (let Subscription of this.Subscriptions) {
      Subscription.unsubscribe();
    }
  }
  productStore: Store = new Store(
    'Baby Store',
    ['branch One', 'branch Two', 'branch Three'],
    'https://cdn5.vectorstock.com/i/1000x1000/96/74/baby-shop-logo-vector-3819674.jpg'
  );
  Product: IProduct = {
    id: 105,
    Name: 'PRINTED SLEEVELESS JUMPSUIT',
    Quantity: 5,
    Price: 275,
    Img: 'https://cdn.shopify.com/s/files/1/0613/2927/7173/products/2123182803_1_360x.jpg?v=1678716497',
    CateogryID: 2,
    Discount: DiscountOffers.Two,
  };
}
