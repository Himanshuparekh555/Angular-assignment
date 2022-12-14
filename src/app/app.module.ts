import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonFormDialogComponent } from './components/person-form-dialog/person-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NewPersonDialogComponent } from './components/new-person-dialog/new-person-dialog.component';



@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    DataTableComponent,
    ConfirmationDialogComponent,
    PersonFormDialogComponent,
    NewPersonDialogComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NewPersonDialogComponent
  ],
  providers: [],
  entryComponents: [ConfirmationDialogComponent, PersonFormDialogComponent,NewPersonDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
