import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomTextTruncatePipe } from './shared/pipes/random-text-truncate.pipe';
import { PiTimeAgoPipe } from './shared/pipes/pi-time-ago.pipe';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule} from 'primeng/dropdown';
import { AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { ThreadComponent } from 'src/app/modules/home/components/thread/thread.component';
import { SearchComponent } from 'src/app/modules/home/components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { SearchBarComponent } from './modules/home/components/banner/search-bar/search-bar.component';
import { SearchFilterComponent } from 'src/app/modules/home/components/search/search-filter/search-filter.component';
import { ContentEditorComponent } from 'src/app/modules/home/components/browse/content-editor/content-editor.component';
import { ContentComponent } from 'src/app/modules/home/components/browse/content/content.component';
import { QuillModule } from 'ngx-quill';
import { ContentFormDialogComponent } from 'src/app/modules/home/components/browse/content-form-dialog/content-form-dialog.component'
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { BannerComponent } from 'src/app/modules/home/components/banner/banner.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    RandomTextTruncatePipe,
    PiTimeAgoPipe,
    ThreadComponent,
    SearchComponent,
    SearchBarComponent,
    SearchFilterComponent,
    ContentEditorComponent,
    ContentComponent,
    ContentFormDialogComponent,
    BannerComponent,
    HomeComponent
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
    ButtonModule,
    QuillModule.forRoot(),
    DialogModule,
    DropdownModule,
    TagModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
