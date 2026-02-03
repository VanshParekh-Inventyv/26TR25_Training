import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit, OnChanges {
  @Input() userData: { name: string; age: number; avatarImgUrl: string } = {
    name: '',
    age: 0,
    avatarImgUrl: '',
  };

  @Output() userStatus = new EventEmitter<boolean>();
  @Output() userNameChange = new EventEmitter<string>();

  userName: string = '';
  status: boolean = true;

  ngOnInit(): void {
    console.log('Calling OnInit()');
    this.userName = this.userData.name;
    console.log(this.userData);
    console.log(
      `user's current status is ${this.status ? 'Active' : 'Inactive'}`,
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    const userChange = changes['userData'];

    if (userChange?.currentValue) {
      console.log('Calling OnChanges()');
      this.userName = userChange.currentValue.name;
      console.log('Previous:', userChange.previousValue?.name ?? '');
      console.log('Current:', userChange.currentValue?.name);
    }
  }

  onClick(): void {
    this.status = !this.status;
    this.userStatus.emit(this.status);
  }

  onNameChange(value: string): void {
    this.userNameChange.emit(value);
  }
}
