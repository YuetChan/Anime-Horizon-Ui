import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { BannerComponent } from 'src/app/modules/home/components/banner/banner.component';
import { SearchBarComponent } from 'src/app/modules/home/components/banner/search-bar/search-bar.component';
import { ThreadComponent } from 'src/app/modules/home/components/thread/thread.component';
import { SearchComponent } from 'src/app/modules/home/components/search/search.component';
import { SearchFilterComponent } from 'src/app/modules/home/components/search/search-filter/search-filter.component';
import { ContentEditorComponent } from 'src/app/modules/home/components/browse/content-editor/content-editor.component';
import { ContentComponent } from 'src/app/modules/home/components/browse/content/content.component';
import { QuillModule } from 'ngx-quill';
import { ContentFormDialogComponent } from 'src/app/modules/home/components/browse/content-form-dialog/content-form-dialog.component'
import { ContentEmptyComponent } from 'src/app/modules/home/components/browse/content-empty/content-empty/content-empty.component';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { HomeRoutingModule } from './home-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {TabMenuModule} from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api'

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SearchBarComponent,
    ThreadComponent,
    SearchComponent,
    SearchFilterComponent,
    ContentEditorComponent,
    ContentComponent,
    ContentFormDialogComponent,
    ContentEmptyComponent,
  ],
  imports: [
    HomeRoutingModule,
    PaginatorModule,
    QuillModule.forRoot(),
    DialogModule,
    TagModule,
    QuillModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    AutoCompleteModule,
    ToggleButtonModule,

    CommonModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    TabMenuModule

  ]
})
export class HomeModule { }
