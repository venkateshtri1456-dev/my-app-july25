import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding.component';
import { By } from '@angular/platform-browser';


describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingComponent ],
       imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should have default values', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.sum).toBe(0);
    expect(component.name).toBe('Venkatesh');
    expect(component.age).toBe(30);
    expect(component.mobile).toBe('+91');
  });

  it('should calculate sum correctly', () => {
    component.num1 = 5;
    component.num2 = 10;
    component.addition();
    expect(component.sum).toBe(15);
  });

  it('should disable Add button when inputs are missing', () => {
    component.num1 = 0;
    component.num2 = 0;
    fixture.detectChanges();

    const addBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(addBtn.disabled).toBeTrue();
  });

  it('should bind image url correctly', () => {
    const imgEl = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgEl.src).toContain(component.image_url);
  });

  it('should call greeting() method on button click', () => {
    spyOn(window, 'alert');
    component.greeting();
    expect(window.alert).toHaveBeenCalledWith('Hello');
  });

  it('should call typing() and alert with mobile value', () => {
    spyOn(window, 'alert');
    component.typing();
    expect(window.alert).toHaveBeenCalledWith(component.mobile);
  });

  it('should call fruits() and show alert', () => {
    spyOn(window, 'alert');
    component.fruits();
    expect(window.alert).toHaveBeenCalledWith('Fruit changed');
  });
});

