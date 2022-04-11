// GENERATED
import { Directive, NgModule } from '@angular/core';
import { ParticleProps } from '@pmndrs/cannon-worker-api';
import { GetByIndex, NgtPhysicsBody } from '../body';

@Directive({
    selector: '[ngtPhysicParticle]',
    exportAs: 'ngtPhysicParticle',
})
export class NgtPhysicParticle extends NgtPhysicsBody<
    'Particle',
    ParticleProps
> {
    static ngAcceptInputType_getPhysicProps: GetByIndex<ParticleProps>;

    override get bodyType(): 'Particle' {
        return 'Particle';
    }

    protected override preInit() {
        this.set({ argsFn: () => [] });
    }
}

@NgModule({
    declarations: [NgtPhysicParticle],
    exports: [NgtPhysicParticle],
})
export class NgtPhysicParticleModule {}
