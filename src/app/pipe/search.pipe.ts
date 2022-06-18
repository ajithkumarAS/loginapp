import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any,searchText:string): any {
    {
     
      if(searchText===undefined)
      {
        return value
      }
      return value.filter((data:any)=>(data.name).toLowerCase().indexOf(searchText.toLowerCase())!==-1)
      
        }
  }
  

}
