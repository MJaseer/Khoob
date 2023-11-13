import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let appHomeDebugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent, AppComponent]
    });
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;

    const appHomeElement = document.createElement('app-home');
    fixture.nativeElement.appendChild(appHomeElement);
    fixture.detectChanges();

    appHomeDebugElement = fixture.debugElement.query(By.css('app-home'));
  });

  it('should fail to display the app-home component because it is not a known element', () => {
    expect(appHomeDebugElement).toBeFalsy();
  })
})
