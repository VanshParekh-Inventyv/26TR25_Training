import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgClass,
  ],
  templateUrl: './user-profile-card.component.html',
  styleUrl: './user-profile-card.component.css',
})
export class UserProfileCardComponent implements OnInit, OnChanges {
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
