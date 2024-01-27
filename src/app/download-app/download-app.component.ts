import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download-app',
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.scss']
})
export class DownloadAppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "app-store",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/app_store.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "google-play",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/google_play.svg")
    );
  }
}
