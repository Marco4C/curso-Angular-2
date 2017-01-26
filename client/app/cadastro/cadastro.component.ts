import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id, 
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;
    service: FotoService;

    constructor(http: Http, fb: FormBuilder, service: FotoService){
        this.http = http;
        this.service = service;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }
    
    cadastrar(event){
        event.preventDefault();
        this.service.cadastra(this.foto).subscribe(res => {
            console.log(this.foto);
            this.foto = new FotoComponent();
        }, error => console.log(error));
    }

}