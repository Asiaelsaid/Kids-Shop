import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactAsComponent } from './component/contact-as/contact-as.component';
import { AboutAsComponent } from './component/about-as/about-as.component';
import { MasterProductComponent } from './component/master-product/master-product.component';
import { ProductsComponent } from './component/products/products.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductDetialsComponent } from './component/product-detials/product-detials.component';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { userGuard } from './Guards/user.guard';
import { UsertemplateformComponent } from './component/users/usertemplateform/usertemplateform.component';
import { UserReactiveFormComponent } from './component/users/usertemplateform/user-reactive-form/user-reactive-form.component';
import { NewProductComponent } from './component/new-product/new-product.component';
import { EditDeleteProductComponent } from './component/edit-delete-product/edit-delete-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponentComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent, title: 'Home page' },
      {
        path: 'Products',
        component: MasterProductComponent,
        title: ' Product page',
      },
      {
        path: 'Product/:pid',
        component: ProductDetialsComponent,
        title: ' Product Details page',
      },
      { path: 'AboutUs', component: AboutAsComponent, title: ' About As page' },
      {
        path: 'ContactUs',
        component: ContactAsComponent,
        title: 'Contact As  page',
      },
      {
        path: 'login',
        component: UserLoginComponent,
        title: 'login',
        canActivate:[userGuard]
      },
      {
        path: 'logout',
        component: UserLoginComponent,
        title: 'logout',
      },
      {
        path: 'admin',
        component:NewProductComponent,
        title: 'new product',
      },
      {
        path: 'edit/:pid',
        component:EditDeleteProductComponent,
        title: 'edit product',
      },
      {
        path: 'reactiveForm',
        component: UserReactiveFormComponent,
        title: 'Reactive  From',
      },
      {
        path: 'user',
        loadChildren: () =>
          import('src/app/component/user/user.module').then(
            (m) => m.UserModule
          ),
      },
    ],
  },

  //Wild Card Path
  { path: '**', component: NotFoundComponent, title: 'Not Found page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
