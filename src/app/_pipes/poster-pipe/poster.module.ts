import { NgModule } from "@angular/core";
import { PosterPipe } from './poster.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PosterPipe],
  exports: [PosterPipe],
  imports: [CommonModule]
})
export class PosterPipeModule { }
