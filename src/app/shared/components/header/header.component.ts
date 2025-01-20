import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { TuiButton, TuiIcon, TuiPopup } from '@taiga-ui/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TuiDrawer } from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  imports: [TuiButton, TuiIcon, SidebarComponent, TuiDrawer, TuiPopup,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly open = signal(false);

  protected onClose(): void {
    this.open.set(false);
  }
}
