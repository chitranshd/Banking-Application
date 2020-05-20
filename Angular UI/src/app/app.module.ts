import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {VALID} from '@angular/forms/src/model';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { CustomerStatementComponent } from './customer-statement/customer-statement.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { CustomerContainerComponent } from './customer-container/customer-container.component'
import {HttpClientModule} from '@angular/common/http';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { AccountComponent } from './account/account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminListAccountsComponent } from './admin-list-accounts/admin-list-accounts.component';
import { SearchComponent } from './search/search.component';
import { AdminCustomernameComponent } from './admin-customername/admin-customername.component';
import { SearchAccountnoComponent } from './search-accountno/search-accountno.component';
import { ShowAccountsAdminComponent } from './show-accounts-admin/show-accounts-admin.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const routes:Routes=[
  {path:'app',component:AppComponent},
  {path:'Login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'customer',component:CustomerComponent},
  {path:'custInfo',component:CustomerInformationComponent},
  {path:'custcontain/:username',component:CustomerContainerComponent},
  {path:'custcontain',component:CustomerContainerComponent},
  {path:'custprofile',component:CustomerProfileComponent},
  {path:'update-password',component:UpdatePasswordComponent},
  {path:'update-mobile',component:UpdateMobileComponent},
  {path:'account',component:AccountComponent},
  {path:'update-address',component:UpdateAddressComponent},
  {path:'funds',component:FundTransferComponent},
  {path:'list-accounts',component:ListAccountsComponent},
  {path:'list-account',component:ListAccountComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'adminlistaccounts',component:AdminListAccountsComponent},
  {path:'admincontain',component:AdminContainerComponent},
  {path:'admin-customername/:username',component:AdminCustomernameComponent},
  {path:'search',component:SearchComponent},
  {path:'transactions/:accountNo',component:TransactionsComponent},
  {path:'adminstatement/:accountNo',component:CustomerStatementComponent},
  {path:'search-account',component:SearchAccountnoComponent},
  {path:'show-admin-account/:accountNo',component:ShowAccountsAdminComponent},
  {path:'',redirectTo:'app-root',pathMatch:'full'},
  {path:'*',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    CustomerInformationComponent,
    CustomerStatementComponent,
    FundTransferComponent,
    CustomerContainerComponent,
    UpdatePasswordComponent,
    UpdateMobileComponent,
    UpdateAddressComponent,
    AccountComponent,
    ListAccountComponent,
    ListAccountsComponent,
    TransactionsComponent,
    AdminContainerComponent,
    AdminListAccountsComponent,
    SearchComponent,
    AdminCustomernameComponent,
    SearchAccountnoComponent,
    ShowAccountsAdminComponent,
    CustomerProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
   ReactiveFormsModule,
   ShowHidePasswordModule,
   BrowserAnimationsModule,
   ToastrModule.forRoot({ positionClass: 'toast-top-center', preventDuplicates:true }),
   HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
