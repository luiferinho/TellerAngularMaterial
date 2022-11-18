import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ContentComponent } from './layout/content/content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { EditorComponent } from './usuarios/editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogPropietariosComponent } from './dialog-propietarios/dialog-propietarios.component';
import {MatSelectModule} from '@angular/material/select';
import { DialogRevisionesComponent } from './dialog-revisiones/dialog-revisiones.component';
import { RevisionesComponent } from './revisiones/revisiones.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { DialogMecanicosComponent } from './dialog-mecanicos/dialog-mecanicos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LayoutComponent,
    FooterComponent,
    SidebarComponent,
    ToolbarComponent,
    ContentComponent,
    EditorComponent,
    DialogPropietariosComponent,
    DialogRevisionesComponent,
    RevisionesComponent,
    MecanicosComponent,
    DialogMecanicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
