import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripeComponent } from './stripe/stripe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BuyerCartViewComponent } from './buyer-cart-view/buyer-cart-view.component';
import { MatTableModule } from '@angular/material/table';
import { BuyerOrderViewComponent } from './buyer-order-view/buyer-order-view.component';
import { BuyerProductViewComponent } from './buyer-product-view/buyer-product-view.component';
import { SellerOrderViewComponent } from './seller-order-view/seller-order-view.component';
import { SellerStockViewComponent } from './seller-stock-view/seller-stock-view.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerEditProductComponent } from './seller-edit-product/seller-edit-product.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { MatBadgeModule } from '@angular/material/badge';
// MDB Angular Free
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastComponent } from './toast/toast.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterPipe } from './filter.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpInterceptorService } from './service/httpinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    ProductComponent,
    ProductListComponent,
    BuyerCartViewComponent,
    BuyerOrderViewComponent,
    BuyerProductViewComponent,
    SellerOrderViewComponent,
    SellerStockViewComponent,
    SellerAddProductComponent,
    SellerEditProductComponent,
    AccountViewComponent,
    SignUpComponent,
    LoginComponent,
    SellerDashboardComponent,
    ToastComponent,
    SearchbarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    NgbModule,
    MdbFormsModule,
    ModalModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatAutocompleteModule,
  ],
  providers: [
    BsModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
