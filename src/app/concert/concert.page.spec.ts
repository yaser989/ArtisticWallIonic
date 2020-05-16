import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcertPage } from './concert.page';

describe('ConcertPage', () => {
  let component: ConcertPage;
  let fixture: ComponentFixture<ConcertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
