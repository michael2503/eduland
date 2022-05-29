import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharefilesModule } from '../sharefiles/sharefiles.module';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    BlogComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharefilesModule,
    IonicModule.forRoot(),
  ]
})
export class GuestModule { }
