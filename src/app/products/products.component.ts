import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdFilterComponent } from './prodfilter/prodfilter.component';
import { ProddetComponent } from './proddet/proddet.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public dialog: MatDialog) {}

  openFilterPopup(): void {
    const dialogRef = this.dialog.open(ProdFilterComponent, {
      width: '350px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  opendetails(): void {
    const dialogRef = this.dialog.open(ProddetComponent, {
      width: '750px',
      height: '720px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
