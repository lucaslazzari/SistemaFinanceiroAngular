import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sistema',
  standalone: true,
  imports: 
  [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    ReactiveFormsModule
  ],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})
export class SistemaComponent {

  constructor(public menuService: MenuService, public formBuider: FormBuilder){

  }

  sistemaForm: FormGroup;

  ngOnInit(){
    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuider.group
    (
      {
        name:['',[Validators.required]]
      }
    )
  }

  dadosForm(){
    return this.sistemaForm.controls;
  }

  enviar(){
    debugger
    var dados = this.dadosForm();
    alert(dados["name"].value)
  }
}
