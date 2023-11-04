import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "app-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/app-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/instagram-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/facebook-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "app-store",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/app_store.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "google-play",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google_play.svg")
    );
  }
}
