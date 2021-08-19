import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteleraavanzadoPage } from './avanzado.page';

describe('CarteleraavanzadoPage', () => {
  let component: CarteleraavanzadoPage;
  let fixture: ComponentFixture<CarteleraavanzadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteleraavanzadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteleraavanzadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
