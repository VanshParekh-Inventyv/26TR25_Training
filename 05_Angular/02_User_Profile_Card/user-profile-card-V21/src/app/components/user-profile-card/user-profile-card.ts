import {
  Component,
  computed,
  model,
  OnChanges,
  OnInit,
  output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    NgClass,
    FormsModule,
  ],
  templateUrl: './user-profile-card.html',
  styleUrl: './user-profile-card.css',
})
export class UserProfileCard implements OnInit, OnChanges {
  userData = model.required<{ name: string; age: number; avatarImgUrl: string }>();

  userStatus = output<boolean>();
  userNameChange = output<string>();

  userName = computed(() => this.userData.name);
  status = signal<boolean>(true);

  ngOnInit(): void {
    console.log('Calling OnInit()');

    console.log(this.userData());
    console.log(`user's current status is ${this.status() ? 'Active' : 'Inactive'}`);
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
    this.status.update((status) => !status);
    this.userStatus.emit(this.status());
  }

  onNameChange(value: string): void {
    this.userNameChange.emit(value);
  }
}
