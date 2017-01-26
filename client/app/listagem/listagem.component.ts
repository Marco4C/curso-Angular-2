import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos: Object[] = [];
    service: FotoService;
    constructor(service: FotoService){
        this.service = service;
        this.lista();
}

    lista(){
        this.service
        .lista()
        .subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }

}