import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarPage } from './publicar.page';

describe('PublicarPage', () => {
  let component: PublicarPage;
  let fixture: ComponentFixture<PublicarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
