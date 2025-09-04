import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehicleService } from '../vehicle.service';
import { FormsModule } from '@angular/forms';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ],
      imports: [HttpClientTestingModule,
        FormsModule,
      ],   // 👈 add this
      providers: [VehicleService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
