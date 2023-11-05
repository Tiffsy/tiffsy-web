import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { TodayMenuComponent } from './today-menu/today-menu.component';
import { DownloadTiffsyComponent } from './download-tiffsy/download-tiffsy.component';
import { CustomerReviewCardComponent } from './customer-review-card/customer-review-card.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { OrderNowHomepageComponent } from './order-now-homepage/order-now-homepage.component';
import { FooterComponent } from './footer/footer.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AppGuideDashboardComponent } from './app-guide-dashboard/app-guide-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    HeaderComponent,
    ImageCardComponent,
    TodayMenuComponent,
    DownloadTiffsyComponent,
    CustomerReviewCardComponent,
    CustomerReviewsComponent,
    OrderNowHomepageComponent,
    FooterComponent,
    BottomBarComponent,
    AppGuideDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
