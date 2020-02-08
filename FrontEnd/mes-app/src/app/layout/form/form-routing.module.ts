import { ListPlantaComponent } from './list-planta/list-planta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FormPlantaComponent } from './form-planta/form-planta.component';

const routes: Routes = [
    { path: '', component: FormComponent },
    { path: 'listplanta', component: ListPlantaComponent},
    { path: 'planta', component: FormPlantaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
