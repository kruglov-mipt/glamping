import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {

}
