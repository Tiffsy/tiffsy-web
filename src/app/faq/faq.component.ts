import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { Question } from '../interfaces/faq-ques';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {



  currentIcon = 'down'; 
  questList: Question[] = [
    {
      ques: 'How does Tiffsy work?',
      ans: `Tiffsy is a convenient tiffin delivery app that connects you with talented home chefs. Simply
      download the app, sign up, and choose your meal preferences. Our chefs will prepare
      delicious homemade meals, and we'll deliver them to your doorstep at the scheduled times.`,
    },
    {
      ques: 'What meal options do you offer? ',
      ans: `Tiffsy offers two main meal options: Mini Meal and Full Meal. The Mini Meal is perfect for
      those looking for a lighter option, while the Full Meal is a hearty choice for a more substantial
      dining experience. You have the flexibility to switch between these options at any time
      through the app.
      `
    },
    {
      ques: `Can I customize my meal based on dietary preferences or restrictions?
      `,
      ans:`Absolutely! We understand the importance of catering to diverse dietary needs. You can
      specify your preferences, including dietary restrictions, in the app. Our chefs will do their
      best to accommodate your requests.`
    },
    {
      ques: `Is Tiffsy available in my area?
      `,
      ans: `Tiffsy is continually expanding to serve more locations. Enter your delivery address during
      sign-up to check if we're available in your area. We're working hard to bring the joy of Tiffsy
      to as many homes as possible.
      `
    },
    {
      ques: `How do I contact customer support?
 `,
      ans: `If you have any questions or concerns, our customer support team is here to help. You can
      reach out through the app, and we'll respond promptly to assist you.
      `
    },
    {
      ques: `Can I gift Tiffsy to someone else? `,
      ans: `Absolutely! Tiffsy makes for a thoughtful and convenient gift. You can purchase a
      subscription for a friend or family member and have delicious, homemade meals delivered to
      their doorstep.
      `
    },
    {
      ques: `How do I request a refund for a meal?
      `,
      ans: `Refunding a meal is easy and can be done directly through the Tiffsy app. Simply navigate to
      your order history, select the specific meal you'd like a refund for, and follow the prompts to
      initiate the refund process. No need to contact customer support—our app is designed to
      make the process seamless.
      `
    },
    {
      ques: `What is the refund policy for skipped meals?
      `,
      ans: `If you decide to skip a meal, you won't be charged for that day. The app allows you to
      manage your meal schedule effortlessly, and the billing system automatically adjusts based
      on your choices.
      `
    },
    {
      ques: `Can I get a refund if I need to cancel my subscription?
      `,
      ans: `Yes, you can request a refund for any remaining meals in your subscription if you need to
      cancel. Navigate to the app's subscription settings, and the refund process will be clearly
      outlined for you.
      `
    },
    {
      ques: `Is there a time limit for requesting a refund for a meal?
      `,
      ans: `Absolutely. Refund requests for a particular meal must be made before the freeze time,
      which is three hours before the scheduled delivery. This ensures that our chefs have ample
      time to prepare and adjust orders accordingly.
      `
    },
    {
      ques: `How long does it take to process a refund?
      `,
      ans: `Refunds are processed promptly through the app. The exact processing time may vary
      depending on your payment method, but our goal is to ensure a quick and hassle-free
      experience for our users.
      `
    },
    {
      ques: `Can I review my refund history in the app?
      `,
      ans: `Yes, the app includes a detailed transaction history where you can review your refund
      requests and their status. This feature provides transparency and allows you to keep track of
      your account activities.
      `
    },
    {
      ques: `Are there any fees associated with meal refunds?
      `,
      ans: `Tiffsy doesn't charge any additional fees for meal refunds. You'll be refunded the full amount
      for the canceled meal directly to your payment method.
      `
    },
    {
      ques: `What should I do if I encounter issues with the refund process?

      `,
      ans: `While our app is designed to make the refund process seamless, if you encounter any
      issues, our customer support team is ready to assist you. You can reach out through the app
      for personalized assistance.`
    },
    
    // Add more questions and answers as needed
  ];

  
  faqVisibility: { [key: string]: boolean } = {};
  faqIconState: { [key: string]: string } = {};

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      "up",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/arrow-up.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "down",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/arrow-right.svg")
    );

    this.questList.forEach((faq) => {
      this.faqIconState[faq.ques] = 'down';
    });
  }

  toggleAnswer(faqId: string): void {
    this.faqVisibility[faqId] = !this.faqVisibility[faqId];
    this.faqIconState[faqId] = this.faqVisibility[faqId] ? 'up' : 'down';
  }

   
   
}
