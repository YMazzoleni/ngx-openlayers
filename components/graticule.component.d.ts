/// <reference types="openlayers" />
import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { style } from 'openlayers';
import { MapComponent } from './map.component';
export declare class GraticuleComponent implements AfterContentInit, OnChanges {
    private map;
    instance: any;
    componentType: string;
    strokeStyle: style.Stroke;
    showLabels: boolean;
    lonLabelPosition: number;
    latLabelPosition: number;
    constructor(map: MapComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
}
