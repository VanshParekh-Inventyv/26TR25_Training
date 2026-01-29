import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsListComponent } from './commands-list-component';

describe('CommandsListComponent', () => {
  let component: CommandsListComponent;
  let fixture: ComponentFixture<CommandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
