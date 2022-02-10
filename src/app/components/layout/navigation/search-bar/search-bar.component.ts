import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  isShowSearch = false;

  @ViewChild('search') search: ElementRef | undefined;
  @ViewChild('submit') submit: ElementRef | undefined;
  @ViewChild('toggleBtn') toggleBtn: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.search?.nativeElement && e.target !== this.submit?.nativeElement) {
        this.isShowSearch = false;
      }
      if (e.target === this.toggleBtn?.nativeElement) {
        this.isShowSearch = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
