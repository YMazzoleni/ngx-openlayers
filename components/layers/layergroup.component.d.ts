/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
export declare class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
    instance: ol.layer.Group;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
}
