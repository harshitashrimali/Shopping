import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment.prod';

import { FormsModule } from '@angular/forms'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ShopComponent } from './component/shop/shop.component';
import { CartComponent } from './component/cart/cart.component';
import { QuantitySelectorComponent } from './component/quantity-selector/quantity-selector.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ThankyouComponent } from './component/thankyou/thankyou.component';
import { ContactComponent } from './component/contact/contact.component';
import { PrivacypolicyComponent } from './component/privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './component/termsconditions/termsconditions.component';
import { DeliveryreturnsComponent } from './component/deliveryreturns/deliveryreturns.component';
import { FaqsComponent } from './component/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    MyOrdersComponent,
    ManageProductsComponent,
    ProductFormComponent,
    ShopComponent,
    CartComponent,
    QuantitySelectorComponent,
    CheckoutComponent,
    ThankyouComponent,
    ContactComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    DeliveryreturnsComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'pages/privacy-policy',
        component: PrivacypolicyComponent
      },
      {
        path: 'pages/terms-conditions',
        component: TermsconditionsComponent
      },
      {
        path: 'pages/delivery-returns',
        component: DeliveryreturnsComponent
      },
      {
        path: 'pages/faqs',
        component: FaqsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'thankyou',
        component: ThankyouComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'manage-products',
        component: ManageProductsComponent,
        canActivate: [AuthGuardService,AdminAuthGuardService]
      },
      {
        path: 'product-form/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService,AdminAuthGuardService]
      },
      {
        path: 'product-form',
        component: ProductFormComponent,
        canActivate: [AuthGuardService,AdminAuthGuardService]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

