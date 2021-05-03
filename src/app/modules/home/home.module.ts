import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { ThreadComponent } from 'src/app/modules/home/components/thread/thread.component';
import { SearchComponent } from 'src/app/modules/home/components/search/search.component';
import { SearchFilterComponent } from 'src/app/modules/home/components/search/search-filter/search-filter.component';
import { ContentComponent } from 'src/app/modules/home/components/browse/content/content.component';
import { SearchBarComponent } from 'src/app/modules/home/components/search/search-bar/search-bar.component';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { HomeRoutingModule } from './home-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentMetaComponent } from './components/browse/content/content-meta/content-meta.component';
import { AuthInterceptor } from 'src/app/shared/services/auth.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    ThreadComponent,
    SearchComponent,
    SearchFilterComponent,
    ContentComponent,
    ContentMetaComponent,
  ],
  imports: [
    HomeRoutingModule,
    PaginatorModule,
    DialogModule,
    TagModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,

    CommonModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class HomeModule { }
