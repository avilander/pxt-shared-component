import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { PxtAppHeaderComponent } from "./pxt-app-header.component";
import { AngularMaterialModule } from "../modules/angular-material.module";
import { CommonModule } from "@angular/common";
var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, AngularMaterialModule],
                    declarations: [PxtAppHeaderComponent],
                    exports: [PxtAppHeaderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                },] },
    ];
    return PxtAppHeaderModule;
}());
export { PxtAppHeaderModule };
//# sourceMappingURL=pxt-app-header.module.js.map