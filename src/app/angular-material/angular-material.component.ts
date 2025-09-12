import { Component } from '@angular/core';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FlipkartComponent } from '../flipkart/flipkart.component';
import { IdCardComponent } from '../id-card/id-card.component';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

 constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(VehicleComponent);
    this._bottomSheet.open(FlipkartComponent);
    this._bottomSheet.open(IdCardComponent);
  }
}
