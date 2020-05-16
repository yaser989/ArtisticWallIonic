import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuditionPage } from './audition.page';

describe('AuditionPage', () => {
  let component: AuditionPage;
  let fixture: ComponentFixture<AuditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
