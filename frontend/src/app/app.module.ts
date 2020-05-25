import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './content/home/home.component';
import { ReceitasDetalheComponent } from './content/receitas-detalhe/receitas-detalhe.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReceitasEditarComponent } from './content/receitas-editar/receitas-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceitasDetalheComponent,
    FooterComponent,
    HeaderComponent,
    ReceitasEditarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
