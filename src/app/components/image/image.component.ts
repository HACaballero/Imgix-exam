import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input('properties') properties: string = '';
  images: any = [];
  actualImage: string = '';
  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((images) => {
      this.images = images;
      this.actualImage = this.images[0]['url'];
    });
  }

  changeImage(value: string) {
    this.actualImage = value;
  }
}
