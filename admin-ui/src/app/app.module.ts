import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './search-filter.pipe';
import { AdminService } from './services/admin.services';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchFilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    SearchFilterPipe
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
