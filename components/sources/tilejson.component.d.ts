/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceTileJSONComponent extends SourceComponent implements OnInit {
    instance: source.TileJSON;
    url: string;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
