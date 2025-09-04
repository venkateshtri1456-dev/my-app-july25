import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // ✅ add this

import { FlipkartComponent } from './flipkart.component';
import { FlipkartService } from '../flipkart.service';


describe('FlipkartComponent', () => {
  let component: FlipkartComponent;
  let fixture: ComponentFixture<FlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],   // ✅ fix here
      providers: [FlipkartService] ,         // ✅ provide service
      declarations: [ FlipkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
