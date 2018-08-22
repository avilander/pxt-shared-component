(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('core-js/es7/reflect'), require('zone.js/dist/zone'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'core-js/es7/reflect', 'zone.js/dist/zone', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', '@angular/common'], factory) :
    (factory((global['pxt-shared-component'] = {}),global.ng.core,null,null,null,null,null,null));
}(this, (function (exports,core,reflect,zone,table,tree,material,common) { 'use strict';

    var PxtAppHeaderComponent = /** @class */ (function () {
        function PxtAppHeaderComponent() {
        }
        PxtAppHeaderComponent.prototype.ngOnInit = function () {
        };
        PxtAppHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-pxt-app-header',
                        templateUrl: './pxt-app-header.component.html',
                        styleUrls: ['./pxt-app-header.component.css']
                    },] },
        ];
        /** @nocollapse */
        PxtAppHeaderComponent.ctorParameters = function () { return []; };
        return PxtAppHeaderComponent;
    }());

    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
     */
    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

    var AngularMaterialModule = /** @class */ (function () {
        function AngularMaterialModule() {
        }
        AngularMaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatStepperModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                        ]
                    },] },
        ];
        return AngularMaterialModule;
    }());

    var PxtAppHeaderModule = /** @class */ (function () {
        function PxtAppHeaderModule() {
        }
        PxtAppHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, AngularMaterialModule],
                        declarations: [PxtAppHeaderComponent],
                        exports: [PxtAppHeaderComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA, core.NO_ERRORS_SCHEMA]
                    },] },
        ];
        return PxtAppHeaderModule;
    }());

    /**
     * @module
     * @description
     * Entry point for all public APIs of the async local storage package.
     */

    exports.PxtAppHeaderModule = PxtAppHeaderModule;
    exports.PxtAppHeaderComponent = PxtAppHeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
