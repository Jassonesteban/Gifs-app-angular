import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <div>
      <h5>Buscar</h5>
      <input type="text" placeholder="Buscar Gifs" class="form-control" (keyup.enter)="searchTag()" #txtTagInput/>

    </div>
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
