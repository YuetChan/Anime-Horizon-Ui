import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';

import { StudioComponent } from './pages/studio/studio.component';
import { ContentEditComponent } from './components/content-edit/content-edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component'

import { StudioRoutingModule } from './studio-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContentEditDialogComponent } from './components/content-edit-dialog/content-edit-dialog.component';

@NgModule({
  declarations: [
    StudioComponent,
    MenuComponent,
    ContentEditComponent,
    SectionHeaderComponent,
    BookmarkComponent,
    ContentEditDialogComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SharedModule,
    StudioRoutingModule,
    FlexLayoutModule,
    AvatarModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    EditorModule
  ]
})
export class StudioModule { }
