import { Routes } from '@angular/router';
import { EditorImg } from './editor-img/editor-img';

export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index',
    component: EditorImg
  }
];
