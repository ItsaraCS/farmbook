import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AsideComponent } from './shared/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { ViewPlansComponent } from './pages/plans/view-plans/view-plans.component';
import { NewPlansComponent } from './pages/plans/new-plans/new-plans.component';
import { ViewRecordsComponent } from './pages/records/view-records/view-records.component';
import { NewRecordsComponent } from './pages/records/new-records/new-records.component';
import { CreateFarmComponent } from './pages/farm-settings/create-farm/create-farm.component';
import { ViewFarmComponent } from './pages/farm-settings/view-farm/view-farm.component';
import { MappingComponent } from './pages/farm-settings/mapping/mapping.component';
import { AccountComponent } from './pages/account/account.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    ViewPlansComponent,
    NewPlansComponent,
    ViewRecordsComponent,
    NewRecordsComponent,
    CreateFarmComponent,
    ViewFarmComponent,
    MappingComponent,
    AccountComponent,
    InstructionComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
