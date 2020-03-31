import { NgModule } from '@angular/core';
import { PosterPipe } from './poster.pipe';
import { CommonModule } from '@angular/common';
import { VideoPipe } from '../video.pipe';

@NgModule({
  declarations: [PosterPipe, VideoPipe],
  exports: [PosterPipe, VideoPipe],
  imports: [CommonModule]
})
export class PosterPipeModule { }
