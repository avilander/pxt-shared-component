"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var pxt_app_menu_left_component_1 = require("./components/pxt-app-menu-left/pxt-app-menu-left.component");
var pxt_app_content_component_1 = require("./components/pxt-app-content/pxt-app-content.component");
var __1 = require("..");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        pxt_app_menu_left_component_1.PxtAppMenuLeftComponent,
                        pxt_app_content_component_1.PxtAppContentComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        __1.PxtAppHeaderModule,
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map