(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/toolbar'), require('core-js/es7/reflect'), require('zone.js/dist/zone'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/material/toolbar', 'core-js/es7/reflect', 'zone.js/dist/zone', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', '@angular/common'], factory) :
    (factory((global['pxt-shared-component'] = global['pxt-shared-component'] || {}),global.ng.core,global._angular_material_toolbar,global.coreJs_es7_reflect,global.zone_js_dist_zone,global._angular_cdk_table,global._angular_cdk_tree,global._angular_material,global._angular_common));
}(this, (function (exports,_angular_core,_angular_material_toolbar,coreJs_es7_reflect,zone_js_dist_zone,_angular_cdk_table,_angular_cdk_tree,_angular_material,_angular_common) { 'use strict';

var PxtAppHeaderComponent = /** @class */ (function () {
    function PxtAppHeaderComponent() {
    }
    PxtAppHeaderComponent.prototype.ngOnInit = function () {
    };
    PxtAppHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
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
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        _angular_cdk_table.CdkTableModule,
                        _angular_cdk_tree.CdkTreeModule,
                        _angular_material.MatAutocompleteModule,
                        _angular_material.MatBadgeModule,
                        _angular_material.MatBottomSheetModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatButtonToggleModule,
                        _angular_material.MatCardModule,
                        _angular_material.MatCheckboxModule,
                        _angular_material.MatChipsModule,
                        _angular_material.MatStepperModule,
                        _angular_material.MatDatepickerModule,
                        _angular_material.MatDialogModule,
                        _angular_material.MatDividerModule,
                        _angular_material.MatExpansionModule,
                        _angular_material.MatGridListModule,
                        _angular_material.MatIconModule,
                        _angular_material.MatInputModule,
                        _angular_material.MatListModule,
                        _angular_material.MatMenuModule,
                        _angular_material.MatNativeDateModule,
                        _angular_material.MatPaginatorModule,
                        _angular_material.MatProgressBarModule,
                        _angular_material.MatProgressSpinnerModule,
                        _angular_material.MatRadioModule,
                        _angular_material.MatRippleModule,
                        _angular_material.MatSelectModule,
                        _angular_material.MatSidenavModule,
                        _angular_material.MatSliderModule,
                        _angular_material.MatSlideToggleModule,
                        _angular_material.MatSnackBarModule,
                        _angular_material.MatSortModule,
                        _angular_material.MatTableModule,
                        _angular_material.MatTabsModule,
                        _angular_material.MatToolbarModule,
                        _angular_material.MatTooltipModule,
                        _angular_material.MatTreeModule,
                    ]
                },] },
    ];
    return AngularMaterialModule;
}());

var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule, AngularMaterialModule, _angular_material_toolbar.MatToolbarModule],
                    declarations: [PxtAppHeaderComponent],
                    exports: [PxtAppHeaderComponent],
                    schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA, _angular_core.NO_ERRORS_SCHEMA]
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
