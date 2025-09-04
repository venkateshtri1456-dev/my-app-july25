import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicleComponent } from './create-vehicle.component';
import { VehicleService } from '../vehicle.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleComponent ],
        imports: [HttpClientTestingModule,
        ReactiveFormsModule, 
        ], // ✅ provide mock HttpClient
       providers: [
        VehicleService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // ✅ mock route params
            snapshot: { paramMap: { get: (key: string) => '123' } }, // ✅ mock snapshot
          },
        },
      ],
             // ✅ provide VehicleService
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
