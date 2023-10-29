import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input( {required: true, alias: 'image_name'} ) imageName !: string;
  @Input( {required: true} ) title !: string;
  @Input( {required: false} ) description : string = "";
}
