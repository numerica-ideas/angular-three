import {
    BooleanInput,
    coerceBooleanProperty,
    coerceNumberProperty,
    NgtColor,
    NgtObjectInputs,
    NgtRef,
    NgtRenderState,
    NumberInput,
    provideObjectHosRef,
} from '@angular-three/core';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    EventEmitter,
    Input,
    NgModule,
    Output,
    TemplateRef,
} from '@angular/core';
import { tap } from 'rxjs';
// @ts-ignore
import { preloadFont, Text as TextMeshImpl } from 'troika-three-text';

@Directive({
    selector: 'ng-template[ngt-soba-text-content]',
})
export class NgtSobaTextContent {
    constructor(
        public templateRef: TemplateRef<{ text: NgtRef<TextMeshImpl> }>
    ) {}

    static ngTemplateContextGuard(
        dir: NgtSobaTextContent,
        ctx: any
    ): ctx is { text: NgtRef<TextMeshImpl> } {
        return true;
    }
}

@Component({
    selector: 'ngt-soba-text[text]',
    template: `
        <ngt-primitive
            *ngIf="textMesh"
            [object]="$any(textMesh)"
            (ready)="ready.emit($event)"
            (beforeRender)="beforeRender.emit($event)"
            [ref]="instance"
            [attach]="attach"
            [skipParent]="skipParent"
            [noAttach]="noAttach"
            [name]="name"
            [position]="position"
            [rotation]="rotation"
            [quaternion]="quaternion"
            [scale]="scale"
            [color]="color"
            [userData]="userData"
            [castShadow]="castShadow"
            [receiveShadow]="receiveShadow"
            [visible]="visible"
            [matrixAutoUpdate]="matrixAutoUpdate"
            [dispose]="dispose"
            [raycast]="raycast"
            [appendMode]="appendMode"
            [appendTo]="appendTo"
            (click)="click.emit($event)"
            (contextmenu)="contextmenu.emit($event)"
            (dblclick)="dblclick.emit($event)"
            (pointerup)="pointerup.emit($event)"
            (pointerdown)="pointerdown.emit($event)"
            (pointerover)="pointerover.emit($event)"
            (pointerout)="pointerout.emit($event)"
            (pointerenter)="pointerenter.emit($event)"
            (pointerleave)="pointerleave.emit($event)"
            (pointermove)="pointermove.emit($event)"
            (pointermissed)="pointermissed.emit($event)"
            (pointercancel)="pointercancel.emit($event)"
            (wheel)="wheel.emit($event)"
        >
            <ng-container
                *ngIf="content"
                [ngTemplateOutlet]="content.templateRef"
                [ngTemplateOutletContext]="{ textMesh: instance }"
            ></ng-container>
        </ngt-primitive>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideObjectHosRef(
            NgtSobaText,
            (text) => text.instance,
            (text) => text.parentRef
        ),
    ],
})
export class NgtSobaText extends NgtObjectInputs<TextMeshImpl> {
    @Input() set text(text: string) {
        this.set({ text });
    }

    @Input() set characters(characters: string) {
        this.set({ characters });
    }

    @Input() set fontSize(fontSize: NumberInput) {
        this.set({ fontSize: coerceNumberProperty(fontSize) });
    }

    @Input() set maxWidth(maxWidth: NumberInput) {
        this.set({ maxWidth: coerceNumberProperty(maxWidth) });
    }

    @Input() set lineHeight(lineHeight: NumberInput) {
        this.set({ lineHeight: coerceNumberProperty(lineHeight) });
    }

    @Input() set letterSpacing(letterSpacing: NumberInput) {
        this.set({ letterSpacing: coerceNumberProperty(letterSpacing) });
    }

    @Input() set textAlign(textAlign: 'left' | 'right' | 'center' | 'justify') {
        this.set({ textAlign });
    }

    @Input() set font(font: string) {
        this.set({ font });
    }

    @Input() set anchorX(anchorX: number | 'left' | 'center' | 'right') {
        this.set({ anchorX });
    }

    @Input() set anchorY(
        anchorY:
            | number
            | 'top'
            | 'top-baseline'
            | 'middle'
            | 'bottom-baseline'
            | 'bottom'
    ) {
        this.set({ anchorY });
    }

    @Input() set clipRect(clipRect: [number, number, number, number]) {
        this.set({ clipRect });
    }

    @Input() set depthOffset(depthOffset: NumberInput) {
        this.set({ depthOffset: coerceNumberProperty(depthOffset) });
    }

    @Input() set direction(direction: 'auto' | 'ltr' | 'rtl') {
        this.set({ direction });
    }

    @Input() set overflowWrap(overflowWrap: 'normal' | 'break-word') {
        this.set({ overflowWrap });
    }

    @Input() set whiteSpace(
        whiteSpace: 'normal' | 'overflowWrap' | 'overflowWrap'
    ) {
        this.set({ whiteSpace });
    }

    @Input() set outlineWidth(outlineWidth: number | string) {
        this.set({ outlineWidth });
    }

    @Input() set outlineOffsetX(outlineOffsetX: number | string) {
        this.set({ outlineOffsetX });
    }

    @Input() set outlineOffsetY(outlineOffsetY: number | string) {
        this.set({ outlineOffsetY });
    }

    @Input() set outlineBlur(outlineBlur: number | string) {
        this.set({ outlineBlur });
    }

    @Input() set outlineColor(outlineColor: NgtColor) {
        this.set({ outlineColor });
    }

    @Input() set outlineOpacity(outlineOpacity: NumberInput) {
        this.set({ outlineOpacity: coerceNumberProperty(outlineOpacity) });
    }

    @Input() set strokeWidth(strokeWidth: number | string) {
        this.set({ strokeWidth });
    }

    @Input() set strokeColor(strokeColor: NgtColor) {
        this.set({ strokeColor });
    }

    @Input() set strokeOpacity(strokeOpacity: NumberInput) {
        this.set({ strokeOpacity: coerceNumberProperty(strokeOpacity) });
    }

    @Input() set fillOpacity(fillOpacity: NumberInput) {
        this.set({ fillOpacity: coerceNumberProperty(fillOpacity) });
    }

    @Input() set debugSDF(debugSDF: BooleanInput) {
        this.set({ debugSDF: coerceBooleanProperty(debugSDF) });
    }

    @Output() beforeRender = new EventEmitter<{
        state: NgtRenderState;
        object: TextMeshImpl;
    }>();
    @Output() sync = new EventEmitter<TextMeshImpl>();

    @ContentChild(NgtSobaTextContent) content?: NgtSobaTextContent;

    private _textMesh!: TextMeshImpl;
    get textMesh() {
        return this._textMesh;
    }

    protected override preInit() {
        this.set((state) => ({
            anchorX: state['anchorX'] || 'center',
            anchorY: state['anchorY'] || 'middle',
            text: state['text'] || '',
        }));
    }

    override ngOnInit() {
        super.ngOnInit();
        this.zone.runOutsideAngular(() => {
            this.preloadFont(
                this.select(
                    this.select((s) => s['fonts']),
                    this.select((s) => s['characters'])
                )
            );
            this.onCanvasReady(
                this.store.ready$,
                () => {
                    this._textMesh = new TextMeshImpl();

                    return () => {
                        this._textMesh.dispose();
                    };
                },
                true
            );
        });
    }

    private readonly preloadFont = this.effect<{}>(
        tap(() => {
            const { font, characters } = this.get();
            if (font && characters) {
                preloadFont({ font, characters });
            }
        })
    );

    protected override postSetOptions(textMesh: TextMeshImpl) {
        const invalidate = this.store.get((s) => s.invalidate);
        textMesh.sync(() => {
            invalidate();
            if (this.sync.observed) {
                this.sync.emit(textMesh);
            }
        });
    }

    protected override get optionFields(): Record<string, boolean> {
        return {
            ...super.optionFields,
            text: false,
            characters: true,
            fontSize: true,
            maxWidth: true,
            lineHeight: true,
            letterSpacing: true,
            textAlign: true,
            font: true,
            anchorX: false,
            anchorY: false,
            clipRect: true,
            depthOffset: true,
            direction: true,
            overflowWrap: true,
            whiteSpace: true,
            outlineWidth: true,
            outlineOffsetX: true,
            outlineOffsetY: true,
            outlineBlur: true,
            outlineColor: true,
            outlineOpacity: true,
            strokeWidth: true,
            strokeColor: true,
            strokeOpacity: true,
            fillOpacity: true,
            debugSDF: true,
        };
    }
}

@NgModule({
    declarations: [NgtSobaText, NgtSobaTextContent],
    exports: [NgtSobaText, NgtSobaTextContent],
    imports: [NgtPrimitiveModule, CommonModule],
})
export class NgtSobaTextModule {}
