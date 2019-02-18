
import { NgModule } from '@angular/core';
import { NonMaterialComponent } from './non-material.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [
        MatCheckboxModule
    ],
    declarations: [
        NonMaterialComponent
    ],
    exports: [
        NonMaterialComponent
    ]
})
export class NonMaterialModule {
public static forRoot() {
        return {
            ngModule: NonMaterialModule
        };
    }
}
