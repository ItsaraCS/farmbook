import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoute: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'view-plans',
        component: ViewPlansComponent
    },
    {
        path: 'new-plans',
        component: NewPlansComponent
    },
    {
        path: 'view-records',
        component: ViewRecordsComponent
    },
    {
        path: 'new-records',
        component: NewRecordsComponent
    },
    {
        path: 'create-farm',
        component: CreateFarmComponent
    },
    {
        path: 'view-farm',
        component: ViewFarmComponent
    },
    {
        path: 'mapping',
        component: MappingComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'instruction',
        component: InstructionComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    }
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoute);