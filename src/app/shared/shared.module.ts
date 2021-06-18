import { NgModule } from '@angular/core';
import { PiTimeAgoPipe } from './pipes/pi-time-ago.pipe';
import { RandomTextTruncatePipe } from './pipes/random-text-truncate.pipe';
import { EbTabMenuComponent } from './components/eb-tab-menu/eb-tab-menu.component';
import { EbRedditSectionMetaComponent } from './components/eb-reddit-section-meta/eb-reddit-section-meta.component';
import { EbVerticalMenuComponent } from './components/eb-vertical-menu/eb-vertical-menu.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    RandomTextTruncatePipe,
    PiTimeAgoPipe,
    EbTabMenuComponent,
    EbRedditSectionMetaComponent,
    EbVerticalMenuComponent
  ],
  imports: [
    TabMenuModule,
    MenuModule
  ],
  exports: [
    RandomTextTruncatePipe,
    PiTimeAgoPipe,
    EbTabMenuComponent,
    EbRedditSectionMetaComponent,
    EbVerticalMenuComponent
  ]
})
export class SharedModule { }
