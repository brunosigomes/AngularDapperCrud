import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edicao',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {
  constructor(private usuarioService: UsuariosService, private router: Router, private route: ActivatedRoute) {}
  btnAcao = "Salvar";
  descTitulo = "Edição de Usuários";
  usuario!: UsuarioListar;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.GetUsuarioPorId(id).subscribe(response => {
      this.usuario = response.dados;
    })
  }

  editarUsuario(usuario: UsuarioListar) {
    return this.usuarioService.EditarUsuario(usuario).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
