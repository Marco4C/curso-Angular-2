import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.route';
import { AppComponent } from './app.component';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        FotoModule, 
        PainelModule
    ],
    declarations: [ 
        AppComponent,
        CadastroComponent,
        ListagemComponent
    ],
    bootstrap:  [ AppComponent ]
})
export class AppModule { }