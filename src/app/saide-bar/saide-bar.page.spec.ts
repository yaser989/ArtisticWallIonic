import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaideBarPage } from './saide-bar.page';

describe('SaideBarPage', () => {
  let component: SaideBarPage;
  let fixture: ComponentFixture<SaideBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaideBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaideBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
