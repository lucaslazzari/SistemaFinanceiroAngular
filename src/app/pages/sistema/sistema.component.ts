import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SistemaFinanceiro } from '../../models/SistemaFinanceiro';
import { SistemaService } from '../../services/sistema.service';
import { AuthService } from '../../services/auth.service';

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

  constructor(public menuService: MenuService, public formBuider: FormBuilder, 
    public sistemaService: SistemaService, public authService: AuthService){}

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

    let item = new SistemaFinanceiro();
    item.nome = dados["name"].value;

    item.id = 0;
    item.mes = 0;
    item.ano = 0;
    item.diaFechamento = 0;
    item.gerarCopiaDespesa = true;
    item.mesCopia = 0;
    item.anoCopia = 0;

    this.sistemaService.AdicionarSistemaFinanceiro(item)
    .subscribe((response: SistemaFinanceiro) => {

      this.sistemaForm.reset();

      this.sistemaService.CadastrarUsuarioNoSistema(response.id, this.authService.getEmailUser())
      .subscribe((response: any) => {
        debugger
      },(error) => console.error(error),() => { })

    },(error) => console.error(error),() => { })

  }
}
