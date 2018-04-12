/// <reference types="openlayers" />
import { AfterContentInit, SimpleChanges } from '@angular/core';
import { TileLoadFunctionType, tilegrid, ProjectionLike, source, ImageTile, TileCoord, Tile } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
export declare class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit {
    instance: source.WMTS;
    cacheSize?: number;
    crossOrigin?: (string);
    logo?: (string | olx.LogoOptions);
    tileGrid: tilegrid.WMTS;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    requestEncoding?: (source.WMTSRequestEncoding | string);
    layer: string;
    style: string;
    tileClass?: ((n: ImageTile, coords: TileCoord, state: Tile.State, s1: string, s2: string, type: TileLoadFunctionType) => any);
    tilePixelRatio?: number;
    version?: string;
    format?: string;
    matrixSet: string;
    dimensions?: GlobalObject;
    url?: string;
    tileLoadFunction?: TileLoadFunctionType;
    urls?: string[];
    wrapX?: boolean;
    tileGridWMTS: TileGridWMTSComponent;
    constructor(layer: LayerTileComponent);
    ngOnChanges(changes: SimpleChanges): void;
    setLayerSource(): void;
    ngAfterContentInit(): void;
}
