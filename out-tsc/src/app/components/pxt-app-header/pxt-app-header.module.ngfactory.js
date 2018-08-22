"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./pxt-app-header.module");
var i2 = require("../../../../node_modules/@angular/material/bottom-sheet/typings/index.ngfactory");
var i3 = require("../../../../node_modules/@angular/material/dialog/typings/index.ngfactory");
var i4 = require("../../../../node_modules/@angular/material/datepicker/typings/index.ngfactory");
var i5 = require("../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory");
var i6 = require("../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory");
var i7 = require("@angular/common");
var i8 = require("@angular/cdk/a11y");
var i9 = require("@angular/cdk/platform");
var i10 = require("@angular/cdk/tree");
var i11 = require("@angular/cdk/overlay");
var i12 = require("@angular/cdk/bidi");
var i13 = require("@angular/material/autocomplete");
var i14 = require("@angular/cdk/observers");
var i15 = require("@angular/material/core");
var i16 = require("@angular/material/stepper");
var i17 = require("@angular/material/dialog");
var i18 = require("@angular/material/datepicker");
var i19 = require("@angular/material/menu");
var i20 = require("@angular/material/select");
var i21 = require("@angular/material/tooltip");
var i22 = require("@angular/material/paginator");
var i23 = require("@angular/platform-browser");
var i24 = require("@angular/material/sort");
var i25 = require("@angular/cdk/table");
var i26 = require("@angular/cdk/portal");
var i27 = require("@angular/cdk/scrolling");
var i28 = require("@angular/material/badge");
var i29 = require("@angular/material/bottom-sheet");
var i30 = require("@angular/material/button");
var i31 = require("@angular/material/button-toggle");
var i32 = require("@angular/material/card");
var i33 = require("@angular/material/checkbox");
var i34 = require("@angular/material/chips");
var i35 = require("@angular/cdk/stepper");
var i36 = require("@angular/material/icon");
var i37 = require("@angular/material/divider");
var i38 = require("@angular/cdk/accordion");
var i39 = require("@angular/material/expansion");
var i40 = require("@angular/material/grid-list");
var i41 = require("@angular/cdk/text-field");
var i42 = require("@angular/material/form-field");
var i43 = require("@angular/material/input");
var i44 = require("@angular/material/list");
var i45 = require("@angular/material/progress-bar");
var i46 = require("@angular/material/progress-spinner");
var i47 = require("@angular/material/radio");
var i48 = require("@angular/material/sidenav");
var i49 = require("@angular/material/slider");
var i50 = require("@angular/material/slide-toggle");
var i51 = require("@angular/material/snack-bar");
var i52 = require("@angular/material/table");
var i53 = require("@angular/material/tabs");
var i54 = require("@angular/material/toolbar");
var i55 = require("@angular/material/tree");
var i56 = require("../modules/angular-material.module");
var i57 = require("@angular/cdk/keycodes");
var PxtAppHeaderModuleNgFactory = i0.ɵcmf(i1.PxtAppHeaderModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.MatBottomSheetContainerNgFactory, i3.MatDialogContainerNgFactory, i4.MatDatepickerContentNgFactory, i4.MatCalendarHeaderNgFactory, i5.TooltipComponentNgFactory, i6.MatSnackBarContainerNgFactory, i6.SimpleSnackBarNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID, [2, i7.ɵangular_packages_common_common_a]]), i0.ɵmpd(135680, i8.FocusMonitor, i8.FocusMonitor, [i0.NgZone, i9.Platform]), i0.ɵmpd(4608, i10.CdkTreeNodeDef, i10.CdkTreeNodeDef, [i0.TemplateRef]), i0.ɵmpd(4608, i11.Overlay, i11.Overlay, [i11.ScrollStrategyOptions, i11.OverlayContainer, i0.ComponentFactoryResolver, i11.OverlayPositionBuilder, i11.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i7.DOCUMENT, i12.Directionality]), i0.ɵmpd(5120, i11.ɵc, i11.ɵd, [i11.Overlay]), i0.ɵmpd(5120, i13.MAT_AUTOCOMPLETE_SCROLL_STRATEGY, i13.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, [i11.Overlay]), i0.ɵmpd(4608, i14.MutationObserverFactory, i14.MutationObserverFactory, []), i0.ɵmpd(4608, i15.ErrorStateMatcher, i15.ErrorStateMatcher, []), i0.ɵmpd(4608, i16.MatStepperIntl, i16.MatStepperIntl, []), i0.ɵmpd(5120, i17.MAT_DIALOG_SCROLL_STRATEGY, i17.MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, [i11.Overlay]), i0.ɵmpd(4608, i17.MatDialog, i17.MatDialog, [i11.Overlay, i0.Injector, [2, i7.Location], [2, i17.MAT_DIALOG_DEFAULT_OPTIONS], i17.MAT_DIALOG_SCROLL_STRATEGY, [3, i17.MatDialog], i11.OverlayContainer]), i0.ɵmpd(4608, i18.MatDatepickerIntl, i18.MatDatepickerIntl, []), i0.ɵmpd(5120, i18.MAT_DATEPICKER_SCROLL_STRATEGY, i18.MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, [i11.Overlay]), i0.ɵmpd(5120, i19.MAT_MENU_SCROLL_STRATEGY, i19.ɵd22, [i11.Overlay]), i0.ɵmpd(4608, i15.DateAdapter, i15.NativeDateAdapter, [[2, i15.MAT_DATE_LOCALE], i9.Platform]), i0.ɵmpd(5120, i20.MAT_SELECT_SCROLL_STRATEGY, i20.MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, [i11.Overlay]), i0.ɵmpd(5120, i21.MAT_TOOLTIP_SCROLL_STRATEGY, i21.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, [i11.Overlay]), i0.ɵmpd(5120, i22.MatPaginatorIntl, i22.MAT_PAGINATOR_INTL_PROVIDER_FACTORY, [[3, i22.MatPaginatorIntl]]), i0.ɵmpd(4608, i23.HAMMER_GESTURE_CONFIG, i15.GestureConfig, [[2, i15.MAT_HAMMER_OPTIONS], [2, i15.MatCommonModule]]), i0.ɵmpd(5120, i24.MatSortHeaderIntl, i24.MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, [[3, i24.MatSortHeaderIntl]]), i0.ɵmpd(1073742336, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1073742336, i25.CdkTableModule, i25.CdkTableModule, []), i0.ɵmpd(1073742336, i10.CdkTreeModule, i10.CdkTreeModule, []), i0.ɵmpd(1073742336, i12.BidiModule, i12.BidiModule, []), i0.ɵmpd(1073742336, i15.MatCommonModule, i15.MatCommonModule, [[2, i15.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(1073742336, i9.PlatformModule, i9.PlatformModule, []), i0.ɵmpd(1073742336, i15.MatRippleModule, i15.MatRippleModule, []), i0.ɵmpd(1073742336, i15.MatPseudoCheckboxModule, i15.MatPseudoCheckboxModule, []), i0.ɵmpd(1073742336, i15.MatOptionModule, i15.MatOptionModule, []), i0.ɵmpd(1073742336, i26.PortalModule, i26.PortalModule, []), i0.ɵmpd(1073742336, i27.ScrollDispatchModule, i27.ScrollDispatchModule, []), i0.ɵmpd(1073742336, i11.OverlayModule, i11.OverlayModule, []), i0.ɵmpd(1073742336, i13.MatAutocompleteModule, i13.MatAutocompleteModule, []), i0.ɵmpd(1073742336, i14.ObserversModule, i14.ObserversModule, []), i0.ɵmpd(1073742336, i8.A11yModule, i8.A11yModule, []), i0.ɵmpd(1073742336, i28.MatBadgeModule, i28.MatBadgeModule, []), i0.ɵmpd(1073742336, i29.MatBottomSheetModule, i29.MatBottomSheetModule, []), i0.ɵmpd(1073742336, i30.MatButtonModule, i30.MatButtonModule, []), i0.ɵmpd(1073742336, i31.MatButtonToggleModule, i31.MatButtonToggleModule, []), i0.ɵmpd(1073742336, i32.MatCardModule, i32.MatCardModule, []), i0.ɵmpd(1073742336, i33.MatCheckboxModule, i33.MatCheckboxModule, []), i0.ɵmpd(1073742336, i34.MatChipsModule, i34.MatChipsModule, []), i0.ɵmpd(1073742336, i35.CdkStepperModule, i35.CdkStepperModule, []), i0.ɵmpd(1073742336, i36.MatIconModule, i36.MatIconModule, []), i0.ɵmpd(1073742336, i16.MatStepperModule, i16.MatStepperModule, []), i0.ɵmpd(1073742336, i17.MatDialogModule, i17.MatDialogModule, []), i0.ɵmpd(1073742336, i18.MatDatepickerModule, i18.MatDatepickerModule, []), i0.ɵmpd(1073742336, i37.MatDividerModule, i37.MatDividerModule, []), i0.ɵmpd(1073742336, i38.CdkAccordionModule, i38.CdkAccordionModule, []), i0.ɵmpd(1073742336, i39.MatExpansionModule, i39.MatExpansionModule, []), i0.ɵmpd(1073742336, i15.MatLineModule, i15.MatLineModule, []), i0.ɵmpd(1073742336, i40.MatGridListModule, i40.MatGridListModule, []), i0.ɵmpd(1073742336, i41.TextFieldModule, i41.TextFieldModule, []), i0.ɵmpd(1073742336, i42.MatFormFieldModule, i42.MatFormFieldModule, []), i0.ɵmpd(1073742336, i43.MatInputModule, i43.MatInputModule, []), i0.ɵmpd(1073742336, i44.MatListModule, i44.MatListModule, []), i0.ɵmpd(1073742336, i19.MatMenuModule, i19.MatMenuModule, []), i0.ɵmpd(1073742336, i15.NativeDateModule, i15.NativeDateModule, []), i0.ɵmpd(1073742336, i15.MatNativeDateModule, i15.MatNativeDateModule, []), i0.ɵmpd(1073742336, i20.MatSelectModule, i20.MatSelectModule, []), i0.ɵmpd(1073742336, i21.MatTooltipModule, i21.MatTooltipModule, []), i0.ɵmpd(1073742336, i22.MatPaginatorModule, i22.MatPaginatorModule, []), i0.ɵmpd(1073742336, i45.MatProgressBarModule, i45.MatProgressBarModule, []), i0.ɵmpd(1073742336, i46.MatProgressSpinnerModule, i46.MatProgressSpinnerModule, []), i0.ɵmpd(1073742336, i47.MatRadioModule, i47.MatRadioModule, []), i0.ɵmpd(1073742336, i48.MatSidenavModule, i48.MatSidenavModule, []), i0.ɵmpd(1073742336, i49.MatSliderModule, i49.MatSliderModule, []), i0.ɵmpd(1073742336, i50.MatSlideToggleModule, i50.MatSlideToggleModule, []), i0.ɵmpd(1073742336, i51.MatSnackBarModule, i51.MatSnackBarModule, []), i0.ɵmpd(1073742336, i24.MatSortModule, i24.MatSortModule, []), i0.ɵmpd(1073742336, i52.MatTableModule, i52.MatTableModule, []), i0.ɵmpd(1073742336, i53.MatTabsModule, i53.MatTabsModule, []), i0.ɵmpd(1073742336, i54.MatToolbarModule, i54.MatToolbarModule, []), i0.ɵmpd(1073742336, i55.MatTreeModule, i55.MatTreeModule, []), i0.ɵmpd(1073742336, i56.AngularMaterialModule, i56.AngularMaterialModule, []), i0.ɵmpd(1073742336, i1.PxtAppHeaderModule, i1.PxtAppHeaderModule, []), i0.ɵmpd(256, i34.MAT_CHIPS_DEFAULT_OPTIONS, { separatorKeyCodes: [i57.ENTER] }, []), i0.ɵmpd(256, i15.MAT_DATE_FORMATS, i15.MAT_NATIVE_DATE_FORMATS, [])]); });
exports.PxtAppHeaderModuleNgFactory = PxtAppHeaderModuleNgFactory;
//# sourceMappingURL=pxt-app-header.module.ngfactory.js.map