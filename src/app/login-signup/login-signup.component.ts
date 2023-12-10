import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { SocialAuthService }from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {

  user: any; // Assuming you have defined the 'user' property
  loggedIn: any;

  constructor(
    private authService: SocialAuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    // Register SVG icons in the constructor
    this.matIconRegistry.addSvgIcon(
      "google",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google-icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "help",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/help-icon.svg")
    );
  }

  

  signInWithGoogle() {

    console.log('hii');
    this.authService.authState.subscribe({
      next: (user) => {
        this.user = user;
        this.loggedIn = (user != null);
        
        console.log(this.user);
      
      },
      error: (error) =>{
        console.log(error);
       
        
      }
    })
  }
}


// subscribe(next:(user) => {
//   this.user = user;
//   this.loggedIn = (user != null);
  
//   console.log(this.user);

//   // if (this.loggedIn) {
//   //   this.router.navigate(['/dashboard']); 
//   // }
// },
// error
// );