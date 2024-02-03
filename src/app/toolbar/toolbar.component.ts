import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ){
    this.matIconRegistry.addSvgIcon(
      "tiffsy",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/app-icon.svg")
    );
  }

  directToContact() : void {
    this.router.navigate(['/contact']);
  }
}
