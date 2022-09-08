import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewPersonDialogComponent } from './components/new-person-dialog/new-person-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular datatable advanced course';
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(NewPersonDialogComponent, {
      width: '500px',
    });
  }
}
