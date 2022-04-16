import { Directive, Inject, NgZone, Optional, SkipSelf } from '@angular/core';
import * as THREE from 'three';
import type { NgtInstanceState } from '../abstracts/instance';
import { NgtInstance } from '../abstracts/instance';
import { tapEffect } from '../stores/component-store';
import { NgtStore } from '../stores/store';
import { NGT_OBJECT_HOST_REF, NGT_OBJECT_REF } from '../tokens';
import type { AnyConstructor, NgtRef } from '../types';

@Directive()
export abstract class NgtCommonGeometry<
    TGeometry extends THREE.BufferGeometry = THREE.BufferGeometry
> extends NgtInstance<TGeometry, NgtInstanceState<TGeometry>> {
    abstract get geometryType(): AnyConstructor<TGeometry>;

    constructor(
        zone: NgZone,
        store: NgtStore,
        @Optional()
        @SkipSelf()
        @Inject(NGT_OBJECT_REF)
        parentRef: NgtRef<THREE.Object3D>,
        @Optional()
        @SkipSelf()
        @Inject(NGT_OBJECT_HOST_REF)
        parentHostRef: NgtRef<THREE.Object3D>
    ) {
        super(zone, store, parentRef, parentHostRef);
    }

    override ngOnInit() {
        this.zone.runOutsideAngular(() => {
            this.onCanvasReady(this.store.ready$, () => {
                this.init(this.instanceArgs$);
            });
        });
        super.ngOnInit();
    }

    private readonly init = this.effect<unknown[]>(
        tapEffect((instanceArgs) => {
            const geometry = this.prepareInstance(
                new this.geometryType(...instanceArgs)
            );

            return () => {
                geometry.dispose();
            };
        })
    );
}
