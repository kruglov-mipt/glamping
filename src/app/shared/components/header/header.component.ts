import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TuiButton, TuiIcon, TuiPopup } from '@taiga-ui/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TuiDrawer } from '@taiga-ui/kit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TuiButton, TuiIcon, SidebarComponent, TuiDrawer, TuiPopup,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  router = inject(Router);

  protected readonly open = signal(false);

  protected navigate(): void {
    this.router.navigate(['/home']);
  }

  protected onClose(): void {
    this.open.set(false);
  }


}
