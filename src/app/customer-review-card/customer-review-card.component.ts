import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-review-card',
  templateUrl: './customer-review-card.component.html',
  styleUrls: ['./customer-review-card.component.scss']
})
export class CustomerReviewCardComponent {
  @Input( {required: true, alias: 'image_name'} ) imageName !: string;
  @Input( {required: true, alias: 'customer_name'} ) customerName !: string;
  @Input( {required: true} ) designation !: string;
  @Input( {required: true} ) review !: string;
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "format-quote",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/format-quote.svg")
    );
  }
}
