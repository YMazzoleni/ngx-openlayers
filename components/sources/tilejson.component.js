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
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var SourceTileJSONComponent = (function (_super) {
    __extends(SourceTileJSONComponent, _super);
    function SourceTileJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileJSONComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.TileJSON(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceTileJSONComponent;
}(source_component_1.SourceComponent));
SourceTileJSONComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-tilejson',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceTileJSONComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceTileJSONComponent.ctorParameters = function () { return [
    { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceTileJSONComponent.propDecorators = {
    'url': [{ type: core_1.Input },],
};
exports.SourceTileJSONComponent = SourceTileJSONComponent;
//# sourceMappingURL=tilejson.component.js.map