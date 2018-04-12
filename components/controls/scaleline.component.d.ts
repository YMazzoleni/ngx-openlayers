/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlScaleLineComponent implements OnInit, OnDestroy {
    private map;
    instance: control.ScaleLine;
    units: string;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
