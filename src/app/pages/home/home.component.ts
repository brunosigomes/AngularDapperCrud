import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioListar } from '../../models/Usuario';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private serviceUsuario:UsuariosService) {}

  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];

  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response => {
      this.usuarios = response.dados;
      this.usuariosGeral = response.dados;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.nomeCompleto.toLowerCase().includes(value)
    });
  }

  deletar(id: number | undefined) {
    this.serviceUsuario.DeletarUsuario(id).subscribe(response => {
      window.location.reload();
    })
  }
}
