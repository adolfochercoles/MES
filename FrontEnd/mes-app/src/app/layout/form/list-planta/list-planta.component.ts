import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Http, RequestOptionsArgs, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-list-planta',
  templateUrl: './list-planta.component.html',
  styleUrls: ['./list-planta.component.scss'],
  animations: [routerTransition()]
})
export class ListPlantaComponent {
    private url = 'https://localhost:44395/api/values';
    formPlanta = this.fb.group({
        descripcion: ['', Validators.required]
      });

    constructor(
        private http: Http,
        private fb: FormBuilder) {
        console.log('Constructor List Planta...');
        this.ObtenerLista();
    }

    ObtenerLista() {
      const args = new OptionsArgs();
      this.http.get(this.url, { params: args, withCredentials: false })
               .subscribe(x =>  console.log(JSON.stringify(x)));
    }
}

export class OptionsArgs implements RequestOptionsArgs {
  url: 'https://localhost:44395/api/values';
  method: RequestMethod.Get;
}
