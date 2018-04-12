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
var layer_component_1 = require("./layer.component");
var map_component_1 = require("../map.component");
var LayerGroupComponent = (function (_super) {
    __extends(LayerGroupComponent, _super);
    function LayerGroupComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerGroupComponent.prototype.ngOnInit = function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new openlayers_1.layer.Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    return LayerGroupComponent;
}(layer_component_1.LayerComponent));
LayerGroupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-layer-group',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
LayerGroupComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: LayerGroupComponent, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Optional },] },
]; };
exports.LayerGroupComponent = LayerGroupComponent;
//# sourceMappingURL=layergroup.component.js.map