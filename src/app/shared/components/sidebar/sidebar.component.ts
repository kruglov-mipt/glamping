import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

interface Link {
  name: string;
  href: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [TuiButton, TuiIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  sidebarClosed = output<void>();

  protected onClose(): void {
    this.sidebarClosed.emit();
  }

  protected links: Link[] = [
    {
      href: '/aframe',
      name: 'A-frame'
    },
    {
      href: '/scandi',
      name: 'Скандинавский дом'
    },
    {
      href: '/entertainment',
      name: 'Развлечения'
    },
    {
      href: '/places',
      name: 'Окрестности'
    },
    {
      href: '/gallery',
      name: 'Фотогалерея'
    },
    {
      href: '/rules',
      name: 'Правила проживания'
    },
    {
      href: '/contacts',
      name: 'Как добраться'
    },
  ];
}
