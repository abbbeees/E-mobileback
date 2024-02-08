import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddprodComponent } from './addprod/addprod.component';


@Component({
  selector: 'app-allprod',
  templateUrl: './allprod.component.html',
  styleUrls: ['./allprod.component.scss'],
  
})
export class AllprodComponent {
  searchText = '';

  constructor(public dialog: MatDialog) {}

data = [
  { id: 1, category: 'laptop', name: 'mac', quantity: 3, price: 1000 },
  { id: 2, category: 'smartphones', name: 'Iphone 15 Pro Max', quantity: 15, price: 1000 },
  { id: 3, category: 'accessoires', name: 'behringer Kit', quantity: 5, price: 1000 },
  // Add more product objects as needed
];

updateProduct() {
  console.log('Update Product with ID:',this.data);
}

deleteProduct() {
  console.log('Delete Product with ID:');
}

addProducts(): void {
  const dialogRef = this.dialog.open(AddprodComponent, {
    width: '350px',
    height: '550px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

  // Implement your logic to add products
  console.log('Add Products clicked');
}


}