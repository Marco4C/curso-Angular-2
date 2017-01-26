"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var foto_component_1 = require("../foto/foto.component");
var foto_service_1 = require("../foto/foto.service");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var CadastroComponent = (function () {
    function CadastroComponent(http, fb, service) {
        this.foto = new foto_component_1.FotoComponent();
        this.http = http;
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        this.service.cadastra(this.foto).subscribe(function (res) {
            console.log(_this.foto);
            _this.foto = new foto_component_1.FotoComponent();
        }, function (error) { return console.log(error); });
    };
    return CadastroComponent;
}());
CadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './cadastro.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder, foto_service_1.FotoService])
], CadastroComponent);
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map