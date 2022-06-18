import { Component, OnInit } from '@angular/core';
import { CustomService } from '../service/custom.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
CustomerData:any;
customerName:any;

  constructor(private service:CustomService) {
    this.Loadcustomer()
   }

  ngOnInit(): void {
  this.update()
  }

  Loadcustomer()
  {this.service.Loadcustomer().subscribe((data:any)=>
    {
      this.CustomerData = data;
    })

  }
  Delete(id:any)
  {
    if(confirm('DO YOU WANT TO REMOVE THIS ID'+id))
    {
    this.service.Removecustomer(id).subscribe((data:any)=>
    { this.Loadcustomer()

    })
  }
}

update()
{
  this.service.Updatecustomer({id:2,name:'yashwanth',email:'yash07@gmail.com',phone:1234567890}).subscribe()
  this.Loadcustomer()
}





}
