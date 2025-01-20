import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-houses',
  imports: [],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousesComponent {}
