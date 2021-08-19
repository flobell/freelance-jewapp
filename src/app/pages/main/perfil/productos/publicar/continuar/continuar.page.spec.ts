import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinuarPage } from './continuar.page';

describe('ContinuarPage', () => {
  let component: ContinuarPage;
  let fixture: ComponentFixture<ContinuarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinuarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
