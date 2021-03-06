import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DevicewiseAngularModule } from 'devicewise-angular';
import { NgxPrintModule } from 'ngx-print';

import { environment } from '../environments/environment';
import { DemoMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent, BottomSheetOverviewExampleSheetComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { OpStatusPipe, OpStatusPipe2 } from './report/op-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ReportComponent,
    BottomSheetOverviewExampleSheetComponent,
    OpStatusPipe,
    OpStatusPipe2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DevicewiseAngularModule.forRoot(),
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetOverviewExampleSheetComponent]
})
export class AppModule { }
