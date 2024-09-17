import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { UsuarioListar } from '../../models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private usuarioService: UsuariosService, private router: Router ) {}

  btnAcao = "Criar";
  descTitulo = "Cadastro de Usuários";

  criarUsuario(usuario: UsuarioListar) {
    this.usuarioService.CriarUsuario(usuario).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
