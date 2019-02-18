
import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatButtonModule
    ],
    declarations: [
        MaterialComponent
    ],
    exports: [
        MaterialComponent
    ]
})
export class MaterialModule {
public static forRoot() {
        return {
            ngModule: MaterialModule
        };
    }
}
