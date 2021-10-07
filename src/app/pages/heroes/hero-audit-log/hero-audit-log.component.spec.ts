import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAuditLogComponent } from './hero-audit-log.component';

describe('HeroAuditLogComponent', () => {
  let component: HeroAuditLogComponent;
  let fixture: ComponentFixture<HeroAuditLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAuditLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAuditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
