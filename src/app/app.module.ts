import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';
import { ContadorComponent } from './contador/contador.component';
import { LivrosComponent } from './livros/livros.component';
import { CompraComponent } from './compra/compra.component';
import { LivroComponent } from './livro/livro.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataHoraComponent,
    ContadorComponent,
    LivrosComponent,
    CompraComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
