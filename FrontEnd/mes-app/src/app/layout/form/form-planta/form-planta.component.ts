import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-planta',
  templateUrl: './form-planta.component.html',
  styleUrls: ['./form-planta.component.scss'],
  animations: [routerTransition()]
})
export class FormPlantaComponent {
    private url = 'http://localhost:49985/api/values';
    formPlanta = this.fb.group({
        descripcion: ['', Validators.required]
      });

    constructor(
        private http: HttpClient,
        private fb: FormBuilder) {
        console.log('Constructor Planta...');
    }


  onSubmit() {
    console.log("onSubmit");
    const post = {
        id: 0,
        descripcion: this.formPlanta.get('descripcion').value
    };

    console.log(JSON.stringify(post));
    this.http.post(this.url,
                    JSON.stringify(post),
                    { headers: new HttpHeaders({ 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'  })})
            .subscribe(x => console.log(x));

    console.log('Submit');
  }
}
