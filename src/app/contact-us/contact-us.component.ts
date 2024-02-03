import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(
   
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
   
  )
  {
    this.matIconRegistry.addSvgIcon(
      "insta",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/facebook-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/twitter-icon.svg")
    );
  }
}
