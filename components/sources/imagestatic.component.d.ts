/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { ProjectionLike, source, Extent, AttributionLike, ImageLoadFunctionType, Size } from 'openlayers';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
export declare class SourceImageStaticComponent extends SourceComponent implements OnInit {
    instance: source.ImageStatic;
    projection: (ProjectionLike | string);
    imageExtent: Extent;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: ImageLoadFunctionType;
    logo?: (string | olx.LogoOptions);
    imageSize?: Size;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
}
