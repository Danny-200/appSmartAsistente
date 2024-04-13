import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabperfilPage } from './tabperfil.page';

describe('TabperfilPage', () => {
  let component: TabperfilPage;
  let fixture: ComponentFixture<TabperfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
