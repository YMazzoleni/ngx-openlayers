/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { tilegrid, Size, Coordinate } from 'openlayers';
import { TileGridComponent } from './tilegrid.component';
export declare class TileGridWMTSComponent extends TileGridComponent implements OnInit {
    instance: tilegrid.WMTS;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[];
    tileSizes?: ((number | Size)[]);
    widths?: number[];
    ngOnInit(): void;
}
