import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardStyleDirective } from './Directive/card-style.directive';
import { FormetCardPipe } from './Pipes/formet-card.pipe';
import { MasterProductComponent } from './component/master-product/master-product.component';
import { HomeComponent } from './component/home/home.component';
import { ContactAsComponent } from './component/contact-as/contact-as.component';
import { AboutAsComponent } from './component/about-as/about-as.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductDetialsComponent } from './component/product-detials/product-detials.component';
import { MainComponentComponent } from './component/main-component/main-component.component';
import{HttpClientModule}from '@angular/common/http';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UsertemplateformComponent } from './component/users/usertemplateform/usertemplateform.component';
import { UserReactiveFormComponent } from './component/users/usertemplateform/user-reactive-form/user-reactive-form.component';
import { NewProductComponent } from './component/new-product/new-product.component';
import { EditDeleteProductComponent } from './component/edit-delete-product/edit-delete-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    CardStyleDirective,
    FormetCardPipe,
    MasterProductComponent,
    HomeComponent,
    AboutAsComponent,
    ContactAsComponent,
    AboutAsComponent,
    NotFoundComponent,
    ProductDetialsComponent,
    MainComponentComponent,
    UserLoginComponent,
    UsertemplateformComponent,
    UserReactiveFormComponent,
    NewProductComponent,
    EditDeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
