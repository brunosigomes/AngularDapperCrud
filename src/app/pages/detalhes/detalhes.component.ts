import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
  constructor(private usuarioService: UsuariosService, private route: ActivatedRoute) {}

  usuario!:UsuarioListar;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.GetUsuarioPorId(id).subscribe(response => {
      this.usuario = response.dados;
    })
  }

}
