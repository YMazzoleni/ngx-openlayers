/// <reference types="openlayers" />
import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { interaction, layer, Collection, Feature } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class TranslateInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.Translate;
    features?: Collection<Feature>;
    layers?: (layer.Layer[] | ((layer: layer.Layer) => boolean));
    hitTolerance?: number;
    onChange: EventEmitter<interaction.Translate.Event>;
    onPropertyChange: EventEmitter<interaction.Translate.Event>;
    onTranslateEnd: EventEmitter<interaction.Translate.Event>;
    onTranslateStart: EventEmitter<interaction.Translate.Event>;
    onTranslating: EventEmitter<interaction.Translate.Event>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
