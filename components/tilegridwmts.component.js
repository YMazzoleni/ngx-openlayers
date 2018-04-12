"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var tilegrid_component_1 = require("./tilegrid.component");
var TileGridWMTSComponent = (function (_super) {
    __extends(TileGridWMTSComponent, _super);
    function TileGridWMTSComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileGridWMTSComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.tilegrid.WMTS(this);
    };
    return TileGridWMTSComponent;
}(tilegrid_component_1.TileGridComponent));
TileGridWMTSComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-tilegrid-wmts',
                template: ''
            },] },
];
/** @nocollapse */
TileGridWMTSComponent.ctorParameters = function () { return []; };
TileGridWMTSComponent.propDecorators = {
    'origin': [{ type: core_1.Input },],
    'origins': [{ type: core_1.Input },],
    'resolutions': [{ type: core_1.Input },],
    'matrixIds': [{ type: core_1.Input },],
    'sizes': [{ type: core_1.Input },],
    'tileSizes': [{ type: core_1.Input },],
    'widths': [{ type: core_1.Input },],
};
exports.TileGridWMTSComponent = TileGridWMTSComponent;
//# sourceMappingURL=tilegridwmts.component.js.map