/// <reference types="openlayers" />
import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Extent, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export declare class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
    source: source.Image;
    opacity: number;
    visible: boolean;
    extent: Extent;
    minResolution: number;
    maxResolution: number;
    zIndex: number;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
