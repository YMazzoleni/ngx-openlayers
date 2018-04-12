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
var source_component_1 = require("./source.component");
var layerimage_component_1 = require("../layers/layerimage.component");
var SourceImageStaticComponent = (function (_super) {
    __extends(SourceImageStaticComponent, _super);
    function SourceImageStaticComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceImageStaticComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.ImageStatic(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceImageStaticComponent;
}(source_component_1.SourceComponent));
SourceImageStaticComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-imagestatic',
                template: "<ng-content></ng-content>",
                providers: [{ provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceImageStaticComponent; }) }],
            },] },
];
/** @nocollapse */
SourceImageStaticComponent.ctorParameters = function () { return [
    { type: layerimage_component_1.LayerImageComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceImageStaticComponent.propDecorators = {
    'projection': [{ type: core_1.Input },],
    'imageExtent': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'attributions': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'imageLoadFunction': [{ type: core_1.Input },],
    'logo': [{ type: core_1.Input },],
    'imageSize': [{ type: core_1.Input },],
};
exports.SourceImageStaticComponent = SourceImageStaticComponent;
//# sourceMappingURL=imagestatic.component.js.map