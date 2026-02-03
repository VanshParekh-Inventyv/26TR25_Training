import {
  AfterViewInit,
  Component,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UserProfileCard } from './components/user-profile-card/user-profile-card';

@Component({
  selector: 'app-root',
  imports: [UserProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  user = signal({
    name: 'Vansh',
    age: 22,
    avatarImgUrl: 'developer-avatar.png',
  });

  @ViewChild(UserProfileCard) input: UserProfileCard | undefined;
  @ViewChildren(UserProfileCard)
  statusUpdate: QueryList<UserProfileCard> | undefined;

  ngAfterViewInit(): void {
    console.log('calling AfterViewInit()');
    console.log(`Username: ${this.input?.userData().name}`);
    this.statusUpdate?.forEach((status) => {
      console.log(`User status: ${status.status()}`);
    });
  }

  updatedStatus(status: boolean) {
    console.log(`user's current status is ${status ? 'active' : 'Inactive'}`);
  }

  updateUserName(name: string) {
    this.user.update((user) => ({
      ...user,
      name,
    }));
  }
}
