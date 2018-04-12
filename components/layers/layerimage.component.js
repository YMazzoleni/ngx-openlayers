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
var map_component_1 = require("../map.component");
var layer_component_1 = require("./layer.component");
var layergroup_component_1 = require("./layergroup.component");
var LayerImageComponent = (function (_super) {
    __extends(LayerImageComponent, _super);
    function LayerImageComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerImageComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.layer.Image(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerImageComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    return LayerImageComponent;
}(layer_component_1.LayerComponent));
LayerImageComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-layer-image',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
LayerImageComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: layergroup_component_1.LayerGroupComponent, decorators: [{ type: core_1.Optional },] },
]; };
LayerImageComponent.propDecorators = {
    'opacity': [{ type: core_1.Input },],
    'visible': [{ type: core_1.Input },],
    'extent': [{ type: core_1.Input },],
    'minResolution': [{ type: core_1.Input },],
    'maxResolution': [{ type: core_1.Input },],
    'zIndex': [{ type: core_1.Input },],
};
exports.LayerImageComponent = LayerImageComponent;
//# sourceMappingURL=layerimage.component.js.map