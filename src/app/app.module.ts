import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProductImageComponent } from "./product-image/product-image.component";
import { ProductDepartmentComponent } from "./product-department/product-department.component";
import { PriceDisplayComponent } from "./price-display/price-display.component";
import { ProductRowComponent } from "./product-row/product-row.component";
import { ProductsListComponent } from "./products-list/products-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
