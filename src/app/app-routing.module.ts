import { makeBindingParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { MainregComponent } from './mainreg/mainreg.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path:'',redirectTo:'mainlogin',pathMatch:'full'
  },
  {
    path:'mainlogin',component:MainloginComponent
  },
  {
   path:'mainreg',component:MainregComponent
  },
  {
    path:'dashboard',component:DashboardComponent,children:[
      {
       path:'',redirectTo:'home',pathMatch:'full' 
      },
      {
        path:'home',component:HomeComponent
      },
     
      {
        path:'customer',component:CustomerComponent,children:[
          
          {
            path:'',component:ListingComponent
          },
          {
            path:'login',component:LoginComponent
          },
         
        ],canActivate:[AuthGuard]
      }
    ]
  }



 /*
 {
    path:'home',component:HomeComponent
  },
  {
    path:'customer',component:CustomerComponent,children:[
      {
        path:'',component:ListingComponent
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'edit/:id',component:LoginComponent
      }
    ]
  },
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
