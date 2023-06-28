import {DynamicModule, Module} from '@nestjs/common';
import Piscina from 'piscina';
import {resolve} from 'path';

@Module({})
export class WorkerModule {

    static register(workerName: string): DynamicModule {
        const workerFileName = `${workerName}.js`;
        const workerPath = resolve(__dirname, '../workers', workerFileName);
        const pool = new Piscina({filename: workerPath})

        const provider = {
            provide: workerName,
            useValue: pool
        }

        return {
            module: WorkerModule,
            providers: [provider],
            exports: [provider],
        };
    }


}
