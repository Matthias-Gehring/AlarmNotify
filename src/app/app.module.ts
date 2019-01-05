import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AlarmsComponent } from "./alarms/alarms.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";


import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    AlarmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    MatExpansionModule,
    MatSortModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
