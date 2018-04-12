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
var vector_component_1 = require("./vector.component");
var SourceClusterComponent = (function (_super) {
    __extends(SourceClusterComponent, _super);
    function SourceClusterComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceClusterComponent.prototype.ngAfterContentInit = function () {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new openlayers_1.source.Cluster(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceClusterComponent;
}(source_component_1.SourceComponent));
SourceClusterComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-cluster',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceClusterComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceClusterComponent.ctorParameters = function () { return [
    { type: layers_1.LayerVectorComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceClusterComponent.propDecorators = {
    'distance': [{ type: core_1.Input },],
    'sourceVectorComponent': [{ type: core_1.ContentChild, args: [vector_component_1.SourceVectorComponent,] },],
};
exports.SourceClusterComponent = SourceClusterComponent;
//# sourceMappingURL=cluster.component.js.map