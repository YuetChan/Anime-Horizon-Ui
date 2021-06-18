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
import { ChipsModule } from 'primeng/chips';

import { UserComponent } from './pages/user/user.component';
import { ContentEditComponent } from './components/content-edit/content-edit.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component'
import { StudioComponent } from './components/studio/studio.component'

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContentEditDialogComponent } from './components/content-edit-dialog/content-edit-dialog.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    UserComponent,
    ContentEditComponent,
    SectionHeaderComponent,
    BookmarkComponent,
    ContentEditDialogComponent,
    SubscriberComponent,
    StudioComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SharedModule,
    UserRoutingModule,
    FlexLayoutModule,
    AvatarModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    ChipsModule
  ]
})
export class UserModule { }
