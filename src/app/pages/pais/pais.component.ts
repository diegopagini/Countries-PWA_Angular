import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisInterface } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent implements OnInit {
  pais: PaisInterface;
  constructor(
    public paisesService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Tiene que ser el mismo nombre declarado en las rutas
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.paisesService.getPaisPorId(id).then((pais) => {
      if (!pais) {
        this.router.navigateByUrl('/');
      }
      this.pais = pais;
      console.log(pais);
    });
  }
}
