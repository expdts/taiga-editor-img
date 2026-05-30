import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorImg } from './editor-img';

describe('EditorImg', () => {
  let component: EditorImg;
  let fixture: ComponentFixture<EditorImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorImg],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
