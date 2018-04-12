"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("./map.component");
var GraticuleComponent = (function () {
    function GraticuleComponent(map) {
        this.map = map;
        this.componentType = 'graticule';
    }
    GraticuleComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new openlayers_1.Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.prototype.ngAfterContentInit = function () {
        this.instance = new openlayers_1.Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition
        });
        this.instance.setMap(this.map.instance);
    };
    return GraticuleComponent;
}());
GraticuleComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-graticule',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
GraticuleComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
GraticuleComponent.propDecorators = {
    'strokeStyle': [{ type: core_1.Input },],
    'showLabels': [{ type: core_1.Input },],
    'lonLabelPosition': [{ type: core_1.Input },],
    'latLabelPosition': [{ type: core_1.Input },],
};
exports.GraticuleComponent = GraticuleComponent;
//# sourceMappingURL=graticule.component.js.map