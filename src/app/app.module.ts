import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AsideMenuComponent } from './components/Common/aside-menu/aside-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AsideMenuComponent
  ],
  imports: [
    BrowserModule,CommonModule,FormsModule,RouterModule.forRoot(rutas),BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
