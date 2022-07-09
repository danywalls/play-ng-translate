import { AppComponent } from './app.component';

import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name: 'translate' })
class MockPipe implements PipeTransform {
  transform(value: string): string {
    return '';
  }
}
const mockTranslateService = {
  use: jest.fn(),
  setDefaultLang: jest.fn(),
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockPipe],
      providers: [{ provide: TranslateService, useValue: mockTranslateService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call TranslateService.setDefaultLang()', () => {
    expect(mockTranslateService.setDefaultLang).toHaveBeenCalled();
  });

  it('should call TranslateService.use()', () => {
    expect(mockTranslateService.use).toHaveBeenCalled();
  });
});
