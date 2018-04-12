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
var SourceImageWMSComponent = (function (_super) {
    __extends(SourceImageWMSComponent, _super);
    function SourceImageWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceImageWMSComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.ImageWMS(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceImageWMSComponent;
}(source_component_1.SourceComponent));
SourceImageWMSComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-imagewms',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceImageWMSComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceImageWMSComponent.ctorParameters = function () { return [
    { type: layers_1.LayerImageComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceImageWMSComponent.propDecorators = {
    'attributions': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'hidpi': [{ type: core_1.Input },],
    'serverType': [{ type: core_1.Input },],
    'imageLoadFunction': [{ type: core_1.Input },],
    'logo': [{ type: core_1.Input },],
    'params': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
    'ratio': [{ type: core_1.Input },],
    'resolutions': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
};
exports.SourceImageWMSComponent = SourceImageWMSComponent;
//# sourceMappingURL=imagewms.component.js.map