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
var tilegridwmts_component_1 = require("../tilegridwmts.component");
var SourceTileWMTSComponent = (function (_super) {
    __extends(SourceTileWMTSComponent, _super);
    function SourceTileWMTSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileWMTSComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    };
    SourceTileWMTSComponent.prototype.setLayerSource = function () {
        this.instance = new openlayers_1.source.WMTS(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMTSComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    };
    return SourceTileWMTSComponent;
}(source_component_1.SourceComponent));
SourceTileWMTSComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-tilewmts',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceTileWMTSComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceTileWMTSComponent.ctorParameters = function () { return [
    { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceTileWMTSComponent.propDecorators = {
    'cacheSize': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'logo': [{ type: core_1.Input },],
    'tileGrid': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
    'reprojectionErrorThreshold': [{ type: core_1.Input },],
    'requestEncoding': [{ type: core_1.Input },],
    'layer': [{ type: core_1.Input },],
    'style': [{ type: core_1.Input },],
    'tileClass': [{ type: core_1.Input },],
    'tilePixelRatio': [{ type: core_1.Input },],
    'version': [{ type: core_1.Input },],
    'format': [{ type: core_1.Input },],
    'matrixSet': [{ type: core_1.Input },],
    'dimensions': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'tileLoadFunction': [{ type: core_1.Input },],
    'urls': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
    'tileGridWMTS': [{ type: core_1.ContentChild, args: [tilegridwmts_component_1.TileGridWMTSComponent,] },],
};
exports.SourceTileWMTSComponent = SourceTileWMTSComponent;
//# sourceMappingURL=tilewmts.component.js.map