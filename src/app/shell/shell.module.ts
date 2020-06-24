import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics/public_api';
import { environment } from 'src/environments/environment';
import { AngularFireFunctionsModule } from '@angular/fire/functions/public_api';
import { AngularFirestoreModule } from '@angular/fire/firestore/public_api';
import { AngularFireStorageModule } from '@angular/fire/storage/public_api';
import { AngularFireAuthModule } from '@angular/fire/auth/public_api';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ShellComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
})
export class ShellModule {}
