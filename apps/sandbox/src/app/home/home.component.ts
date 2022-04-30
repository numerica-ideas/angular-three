import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    HostListener,
    NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Directive({
    selector: 'video[sandboxAutoplay]',
})
export class AutoplayVideoDirective {
    constructor(private videoElementRef: ElementRef<HTMLVideoElement>) {}

    @HostListener('mouseover')
    onMouseOver() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.videoElementRef.nativeElement.play().catch(() => {});
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.videoElementRef.nativeElement.pause();
        this.videoElementRef.nativeElement.currentTime = 0;
    }
}

@Component({
    selector: 'sandbox-home',
    template: `
        <small class="absolute right-4 font-xs italic">
            * Interact (click anywhere) on the page to enable example play on
            hover
        </small>
        <div class="header-background bg-white">
            <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div
                        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
                    >
                        <h2
                            class="text-3xl font-extrabold text-gray-800 tracking-tight sm:text-4xl"
                        >
                            Angular Three Examples
                        </h2>
                        <p class="text-xl text-gray-600">
                            Here are some example of things you can do with
                            AngularThree!
                        </p>
                    </div>
                    <ul
                        role="list"
                        class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                    >
                        <li
                            *ngFor="let example of examples"
                            class="bg-gray-50 rounded-xl overflow-hidden xl:text-left"
                        >
                            <div class="space-y-6 xl:space-y-10 relative">
                                <video
                                    sandboxAutoplay
                                    class="w-full h-full max-h-48 object-cover"
                                >
                                    <source
                                        *ngFor="let source of ['webm', 'mp4']"
                                        [src]="example.asset + '.' + source"
                                        [type]="'video/' + source"
                                    />
                                </video>
                                <div
                                    class="p-6 pt-0 space-y-2 xl:flex xl:items-center xl:justify-between"
                                >
                                    <div
                                        class="font-medium text-lg leading-6 space-y-3"
                                    >
                                        <h3
                                            class="text-gray-500 hover:underline"
                                        >
                                            <a [routerLink]="example.link">
                                                {{ example.title }}
                                            </a>
                                        </h3>
                                        <p class="text-gray-400">
                                            {{ example.description }}
                                        </p>
                                        <a
                                            href="#"
                                            class="block text-blue-400 hover:text-blue-500"
                                        >
                                            Source (coming)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .header-background {
                background-image: url(../../assets/header-background.svg);
                background-size: 1200px 600px;
                background-repeat: repeat;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    readonly examples = [
        {
            title: 'Simple Cubes',
            description:
                'Two spinning cubes along with a cube with different materials',
            link: '/cubes',
            asset: 'assets/examples/cubes',
        },
        {
            title: 'Physic Cubes',
            description: 'Simple example to show @angular-three/cannon',
            link: '/physic-cubes',
            asset: 'assets/examples/physic-cubes',
        },
        {
            title: 'Keen Bloom',
            description: 'Simple example to show @angular-three/postprocessing',
            link: '/keen-bloom',
            asset: 'assets/examples/keen',
        },
        {
            title: 'Kinematic Cube',
            description: '@angular-three/cannon example with InstancedMesh',
            link: '/kinematic-cube',
            asset: 'assets/examples/kinematic',
        },
        {
            title: 'Monday Morning',
            description: '@angular-three/cannon example with Constraints',
            link: '/monday-morning',
            asset: 'assets/examples/monday-morning',
        },
    ] as const;
}

@NgModule({
    declarations: [HomeComponent, AutoplayVideoDirective],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }]),
    ],
})
export class HomeComponentModule {}
