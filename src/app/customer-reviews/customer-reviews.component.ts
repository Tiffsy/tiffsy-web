import { Component, ViewChild, ElementRef, HostListener, ChangeDetectorRef, OnInit } from '@angular/core';
import { CustomerReview } from '../interfaces/customer-review';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {
  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  cardWidth!: number;
  marginWidth!: number; 
  scrollDistance!: number;
  numberOfCards!: number;
  maxWidth!: number;
  customerList: CustomerReview[] = [
    {
      imageName: 'customer_img_1.png',
      customerName: 'Aryan Mahajan',
      designation: 'Engineer at Accenture',
      review: `Quoted paragraph as told by the customer regarding
      food delivery experience of Tiffsy services. Quoted paragraph
      as told by the customer regarding food delivery experience
      ofTiffsy services.`
    },
    {
      imageName: 'customer_img_2.png',
      customerName: 'Pallavi Jain',
      designation: 'HR Manager at Zomato',
      review: `Quoted paragraph as told by the customer regarding
      food delivery experience of Tiffsy services. Quoted paragraph
      as told by the customer regarding food delivery experience
      ofTiffsy services.`
    },
    {
      imageName: 'customer_img_3.png',
      customerName: 'Nikhil Agrawal',
      designation: 'Cricket Coach in Pune',
      review: `Quoted paragraph as told by the customer regarding
      food delivery experience of Tiffsy services. Quoted paragraph
      as told by the customer regarding food delivery experience
      ofTiffsy services.`
    },
    {
      imageName: 'customer_img_2.png',
      customerName: 'Pallavi Jain',
      designation: 'HR Manager at Zomato',
      review: `Quoted paragraph as told by the customer regarding
      food delivery experience of Tiffsy services. Quoted paragraph
      as told by the customer regarding food delivery experience
      ofTiffsy services.`
    },
    {
      imageName: 'customer_img_3.png',
      customerName: 'Nikhil Agrawal',
      designation: 'Cricket Coach in Pune',
      review: `Quoted paragraph as told by the customer regarding
      food delivery experience of Tiffsy services. Quoted paragraph
      as told by the customer regarding food delivery experience
      ofTiffsy services.`
    },
    {
      imageName: 'customer_img_3.png',
      customerName: 'Nikhil Agrawal',
      designation: 'Cricket Coach in Pune',
      review: `Quoted paragraph as told by the customer regarding
      food delivery experience of Tiffsy services. Quoted paragraph
      as told by the customer regarding food delivery experience
      ofTiffsy services.`
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.calculateOptimalNumberOfCards();
    this.calculateScrollDistance();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.maxWidth = window.innerWidth;
    this.cdr.detectChanges();
    this.calculateOptimalNumberOfCards();
    this.calculateScrollDistance();
  }

  calculateOptimalNumberOfCards(): void {
    this.cardWidth = this.widgetsContent.nativeElement.querySelector('app-customer-review-card').offsetWidth;
    const cardsDivWidth = document.querySelector('.custom-slider-main')!.clientWidth;
    this.numberOfCards = cardsDivWidth / this.cardWidth;
    console.log("cc" + this.numberOfCards);
    if (this.numberOfCards % 1 > 0.92) {
      this.numberOfCards = Math.ceil(this.numberOfCards);
    } else {
      this.numberOfCards = Math.floor(this.numberOfCards);
    }
    this.maxWidth = this.numberOfCards * this.cardWidth;
    this.cdr.detectChanges();
  }

  calculateScrollDistance(): void {
    this.scrollDistance = this.cardWidth * this.numberOfCards;
  }


  scrollLeft(){
    const cardContainer = this.widgetsContent.nativeElement;
    cardContainer.scrollLeft -= this.scrollDistance;
  }

  scrollRight(){
    const cardContainer = this.widgetsContent.nativeElement;
    this.widgetsContent.nativeElement.scrollLeft += this.scrollDistance;
  }
}
