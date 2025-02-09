import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiAppearance } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiInputPhoneModule } from '@taiga-ui/legacy';

enum FormModel {
  name = 'name',
  surname = 'surname',
  phone = 'phone',
  comment = 'comment',
}

interface IFormModel {
  [FormModel.name]: string | null;
  [FormModel.surname]: string | null;
  [FormModel.phone]: string | null;
  [FormModel.comment]: string | null;
}

@Component({
  selector: 'app-booking',
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiAppearance,
    TuiCardLarge,
    TuiInputPhoneModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent {
  protected readonly testForm: FormGroup = new FormGroup({
    [FormModel.name]: new FormControl<IFormModel[FormModel.name]>(
      null,
      Validators.required
    ),
    [FormModel.surname]: new FormControl<IFormModel[FormModel.surname]>(
      null,
      Validators.required
    ),
    [FormModel.phone]: new FormControl<IFormModel[FormModel.phone]>(
      null,
      [Validators.required, Validators.minLength(12)]
    ),
  });
}
