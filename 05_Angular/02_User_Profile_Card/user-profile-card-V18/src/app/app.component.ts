import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  user = {
    name: 'Vansh',
    age: 22,
    avatarImgUrl: 'developer-avatar.png',
  };

  @ViewChild(UserProfileCardComponent) input!: UserProfileCardComponent;
  @ViewChildren(UserProfileCardComponent)
  statusUpdate!: QueryList<UserProfileCardComponent>;

  ngAfterViewInit(): void {
    console.log('calling AfterViewInit()');
    console.log(`Username: ${this.input.userData.name}`);
    this.statusUpdate.forEach((status) => {
      console.log(`User status: ${status.status}`);
    });
  }

  updatedStatus(status: boolean) {
    console.log(`user's current status is ${status ? 'active' : 'Inactive'}`);
  }

  updateUserName(name: string) {
    this.user = {
      ...this.user,
      name,
    };
  }
}
