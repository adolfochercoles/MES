import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { FormPlantaComponent } from './form-planta/form-planta.component';
import { ListPlantaComponent } from './list-planta/list-planta.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        FormRoutingModule,
        PageHeaderModule,
        HttpModule
    ],
    declarations: [FormComponent, FormPlantaComponent, ListPlantaComponent]
})
export class FormModule {}
