import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabinicioPage } from './tabinicio.page';

describe('TabinicioPage', () => {
  let component: TabinicioPage;
  let fixture: ComponentFixture<TabinicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabinicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
