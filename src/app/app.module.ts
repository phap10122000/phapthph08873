import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SliderComponent } from './slider/slider.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CarouselModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, SliderComponent,  ProductListComponent, ProductComponent, CategoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
