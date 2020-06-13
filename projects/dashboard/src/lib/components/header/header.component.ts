import {Component, HostBinding} from '@angular/core';

import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(public globals: ThemeOptions) {
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  isActive: boolean;
  toggleHeaderMobilee = false
  toggleSidebarMobilee = false

  

  toggleSidebarMobile() {
    this.toggleHeaderMobilee = !this.toggleHeaderMobilee;
  }

  toggleHeaderMobile() {
    this.toggleHeaderMobilee = !this.toggleHeaderMobilee;
  }

}
