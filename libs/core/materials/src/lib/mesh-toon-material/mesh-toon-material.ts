// GENERATED
import {
    AnyConstructor,
    NgtCommonMaterial,
    provideCommonMaterialRef,
} from '@angular-three/core';
import {
    ChangeDetectionStrategy,
    Component,
    NgModule,
    Input,
} from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'ngt-mesh-toon-material',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideCommonMaterialRef(NgtMeshToonMaterial)],
})
export class NgtMeshToonMaterial extends NgtCommonMaterial<
    THREE.MeshToonMaterialParameters,
    THREE.MeshToonMaterial
> {
    static ngAcceptInputType_parameters:
        | THREE.MeshToonMaterialParameters
        | undefined;

    @Input() set color(color: THREE.ColorRepresentation) {
        this.set({ color });
    }

    @Input() override set opacity(opacity: number) {
        this.set({ opacity });
    }

    @Input() set gradientMap(gradientMap: THREE.Texture | null) {
        this.set({ gradientMap });
    }

    @Input() set map(map: THREE.Texture | null) {
        this.set({ map });
    }

    @Input() set lightMap(lightMap: THREE.Texture | null) {
        this.set({ lightMap });
    }

    @Input() set lightMapIntensity(lightMapIntensity: number) {
        this.set({ lightMapIntensity });
    }

    @Input() set aoMap(aoMap: THREE.Texture | null) {
        this.set({ aoMap });
    }

    @Input() set aoMapIntensity(aoMapIntensity: number) {
        this.set({ aoMapIntensity });
    }

    @Input() set emissive(emissive: THREE.ColorRepresentation) {
        this.set({ emissive });
    }

    @Input() set emissiveIntensity(emissiveIntensity: number) {
        this.set({ emissiveIntensity });
    }

    @Input() set emissiveMap(emissiveMap: THREE.Texture | null) {
        this.set({ emissiveMap });
    }

    @Input() set bumpMap(bumpMap: THREE.Texture | null) {
        this.set({ bumpMap });
    }

    @Input() set bumpScale(bumpScale: number) {
        this.set({ bumpScale });
    }

    @Input() set normalMap(normalMap: THREE.Texture | null) {
        this.set({ normalMap });
    }

    @Input() set normalMapType(normalMapType: THREE.NormalMapTypes) {
        this.set({ normalMapType });
    }

    @Input() set normalScale(normalScale: THREE.Vector2) {
        this.set({ normalScale });
    }

    @Input() set displacementMap(displacementMap: THREE.Texture | null) {
        this.set({ displacementMap });
    }

    @Input() set displacementScale(displacementScale: number) {
        this.set({ displacementScale });
    }

    @Input() set displacementBias(displacementBias: number) {
        this.set({ displacementBias });
    }

    @Input() set alphaMap(alphaMap: THREE.Texture | null) {
        this.set({ alphaMap });
    }

    @Input() set wireframe(wireframe: boolean) {
        this.set({ wireframe });
    }

    @Input() set wireframeLinewidth(wireframeLinewidth: number) {
        this.set({ wireframeLinewidth });
    }

    @Input() set wireframeLinecap(wireframeLinecap: string) {
        this.set({ wireframeLinecap });
    }

    @Input() set wireframeLinejoin(wireframeLinejoin: string) {
        this.set({ wireframeLinejoin });
    }

    get materialType(): AnyConstructor<THREE.MeshToonMaterial> {
        return THREE.MeshToonMaterial;
    }

    protected override get optionFields(): Record<string, boolean> {
        return {
            ...super.optionFields,
            color: true,
            opacity: true,
            gradientMap: true,
            map: true,
            lightMap: true,
            lightMapIntensity: true,
            aoMap: true,
            aoMapIntensity: true,
            emissive: true,
            emissiveIntensity: true,
            emissiveMap: true,
            bumpMap: true,
            bumpScale: true,
            normalMap: true,
            normalMapType: true,
            normalScale: true,
            displacementMap: true,
            displacementScale: true,
            displacementBias: true,
            alphaMap: true,
            wireframe: true,
            wireframeLinewidth: true,
            wireframeLinecap: true,
            wireframeLinejoin: true,
        };
    }
}

@NgModule({
    declarations: [NgtMeshToonMaterial],
    exports: [NgtMeshToonMaterial],
})
export class NgtMeshToonMaterialModule {}
