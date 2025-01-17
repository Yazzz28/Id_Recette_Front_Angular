import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteModalComponent } from './recette-modal.component';

describe('RecetteModalComponent', () => {
  let component: RecetteModalComponent;
  let fixture: ComponentFixture<RecetteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
