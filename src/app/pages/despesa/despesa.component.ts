import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectModel } from '../../models/SelectModel';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../guards/auth-guard.service';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: 
  [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})

export class DespesaComponent {

  constructor(public menuService: MenuService, public formBuider: FormBuilder){
  }

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();

  listCategorias = new Array<SelectModel>();
  categoriaSelect = new SelectModel();

  despesaForm: FormGroup;

  ngOnInit(){
    this.menuService.menuSelecionado = 4;

    this.despesaForm = this.formBuider.group
    (
      {
        name:['',[Validators.required]],
        valor:['',[Validators.required]],
        data:['',[Validators.required]],
        sistemaSelect:['',[Validators.required]],
        categoriaSelect:['',[Validators.required]]
      }
    )
  }

  dadosForm(){
    return this.despesaForm.controls;
  }

  enviar(){
    debugger
    var dados = this.dadosForm();
    alert(dados["name"].value)
  }
}
