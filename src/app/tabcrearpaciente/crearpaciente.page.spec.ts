import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearpacientePage } from './crearpaciente.page';

describe('CrearpacientePage', () => {
  let component: CrearpacientePage;
  let fixture: ComponentFixture<CrearpacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearpacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
