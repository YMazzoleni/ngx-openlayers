"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var TranslateInteractionComponent = (function () {
    function TranslateInteractionComponent(map) {
        this.map = map;
        this.onChange = new core_1.EventEmitter();
        this.onPropertyChange = new core_1.EventEmitter();
        this.onTranslateEnd = new core_1.EventEmitter();
        this.onTranslateStart = new core_1.EventEmitter();
        this.onTranslating = new core_1.EventEmitter();
    }
    TranslateInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new openlayers_1.interaction.Translate(this);
        this.instance.on('change', function (event) { return _this.onChange.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.onPropertyChange.emit(event); });
        this.instance.on('translateend', function (event) { return _this.onTranslateEnd.emit(event); });
        this.instance.on('translatestart', function (event) { return _this.onTranslateStart.emit(event); });
        this.instance.on('translating', function (event) { return _this.onTranslating.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    TranslateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return TranslateInteractionComponent;
}());
TranslateInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-translate',
                template: ''
            },] },
];
/** @nocollapse */
TranslateInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
TranslateInteractionComponent.propDecorators = {
    'features': [{ type: core_1.Input },],
    'layers': [{ type: core_1.Input },],
    'hitTolerance': [{ type: core_1.Input },],
    'onChange': [{ type: core_1.Output },],
    'onPropertyChange': [{ type: core_1.Output },],
    'onTranslateEnd': [{ type: core_1.Output },],
    'onTranslateStart': [{ type: core_1.Output },],
    'onTranslating': [{ type: core_1.Output },],
};
exports.TranslateInteractionComponent = TranslateInteractionComponent;
//# sourceMappingURL=translate.component.js.map