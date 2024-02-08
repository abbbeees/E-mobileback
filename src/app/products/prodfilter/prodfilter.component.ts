// prodfilter.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prodfilter',
  templateUrl: './prodfilter.component.html',
  styleUrls: ['./prodfilter.component.scss']
})
export class ProdFilterComponent {
  minPrice: number = 0;
  maxPrice: number = 0;
  selectedCategory: string = '';
  selectedBrand: string = '';
  selectedStorage: string = '';
  selectedRAM: string = '';

  // Other properties for storage and RAM filtering can be added here

  @Output() filtersApplied: EventEmitter<any> = new EventEmitter();

  applyFilters() {
    if (this.minPrice <= this.maxPrice) {
      const filters = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        category: this.selectedCategory,
        brand: this.selectedBrand,
        // Add other filters as needed
      };

      this.filtersApplied.emit(filters);
    } else {
      alert('Min Price should be smaller or equal to Max Price.');
    }
  }
}
