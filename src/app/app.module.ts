import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OverviewsComponent} from './forum/overviews/overviews.component';
import {ForumComponent } from './forum/forum/forum.component';
import {RandomTextTruncatePipe } from './shared/pipes/random-text-truncate.pipe';
import {PiTimeAgoPipe } from './shared/pipes/pi-time-ago.pipe';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PaginatorModule} from 'primeng/paginator';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {PiChipComponent} from './shared/components/pi-chip/pi-chip.component';
import {OverviewComponent} from './forum/overviews/overview/overview.component';
import {SearchOptionComponent} from './forum/search-option/search-option.component';
import {HttpClientModule} from '@angular/common/http';
import {PiTagPanelComponent} from './shared/components/pi-tag-panel/pi-tag-panel.component';
import {TabViewModule} from 'primeng/tabview';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ButtonModule} from 'primeng/button';
import {SearchBarComponent} from './forum/search-bar/search-bar.component';
import { SearchFilterComponent } from './forum/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewsComponent,
    ForumComponent,
    RandomTextTruncatePipe,
    PiTimeAgoPipe,
    PiChipComponent,
    OverviewComponent,
    SearchOptionComponent,
    PiTagPanelComponent,
    SearchBarComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChipsModule,
    DropdownModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AutoCompleteModule,
    PaginatorModule,
    ToggleButtonModule,
    PanelModule,
    CheckboxModule,
    HttpClientModule,
    TabViewModule,
    OverlayPanelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
