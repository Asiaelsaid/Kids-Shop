import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  private adsList: string[] = [];
  constructor() {
    this.adsList = [
      'Big Discount',
      ' sale up to 30%',
      'White Firday offers',
      // '',
      'Specail White Firday offer up to 70%',
    ];
  }
  //creat
  getSheduledAds(intervalInSeconds: number): Observable<string> {
    return new Observable<string>((observer) => {
      // observer.next(); /// some then in promse
      // observer.error();
      // observer.complete();
      let counter = 0;
      let adsTimer = setInterval(() => {
        if (counter == this.adsList.length) {
          observer.complete();
        }
        if (this.adsList[counter] == '') {
          observer.error(' Error : Empty Ad.');
        }
        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSeconds * 1000);
      return {
        unsubscribe() {
          //will be called
          //1- error
          // 2-complete
          //3-unsubscribe
          clearInterval(adsTimer);
          console.log('unsubscribe...');
        },
      };
    });
  }
  ///using operator creating
  getSerialAds(): Observable<string> {
    // return of("ads1","ads2","ads3");// list of item
    return from(this.adsList); /// Accepeted Arr
  }
}
