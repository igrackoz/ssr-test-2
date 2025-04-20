import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
    this.meta.updateTag(
      { name: 'description', content: 'Este es mi Pricing page' }
    );    
    this.meta.updateTag(
      { name: 'og:title', content: 'Este es mi Pricing page' }
    );
    this.meta.updateTag(
      { name: 'keywords', content: 'hola,mundo,hector,ortiz,curso,angular' }
    );
  }
}

