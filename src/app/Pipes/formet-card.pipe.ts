import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formetCard'
})
export class FormetCardPipe implements PipeTransform {


  transform(value: any): unknown {
    if (value.length === 16) {
      return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 - $2 - $3 - $4');
    } else {

      return value;
    }
  }

}
