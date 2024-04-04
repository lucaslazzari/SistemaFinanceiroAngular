import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectModel } from '../../models/SelectModel';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: 
  [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  constructor(public menuService: MenuService, public formBuider: FormBuilder){
  }

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();

  categoriaForm: FormGroup;

  ngOnInit(){
    this.menuService.menuSelecionado = 3;

    this.categoriaForm = this.formBuider.group
    (
      {
        name:['',[Validators.required]]
      }
    )
  }

  dadosForm(){
    return this.categoriaForm.controls;
  }

  enviar(){
    debugger
    var dados = this.dadosForm();
    alert(dados["name"].value)
  }
}
