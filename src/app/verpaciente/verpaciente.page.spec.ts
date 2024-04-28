import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerpacientePage } from './verpaciente.page';

describe('VerpacientePage', () => {
  let component: VerpacientePage;
  let fixture: ComponentFixture<VerpacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerpacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
