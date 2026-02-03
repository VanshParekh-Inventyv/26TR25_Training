import {
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  user = {
    name: 'Vansh',
    age: 22,
    avatarImgUrl: '../../../assets/developer-avatar.png',
  };

  @ViewChild(UserCardComponent) input!: UserCardComponent;
  @ViewChildren(UserCardComponent)
  statusUpdate!: QueryList<UserCardComponent>;

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
