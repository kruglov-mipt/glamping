import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-places',
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
  standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesComponent {

}
