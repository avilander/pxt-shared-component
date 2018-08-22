"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var pxt_app_menu_left_component_1 = require("./pxt-app-menu-left.component");
describe('PxtAppMenuLeftComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [pxt_app_menu_left_component_1.PxtAppMenuLeftComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pxt_app_menu_left_component_1.PxtAppMenuLeftComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pxt-app-menu-left.component.spec.js.map