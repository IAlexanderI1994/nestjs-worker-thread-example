import {Module} from '@nestjs/common';
import {PrimeController} from "./prime.controller";
import {WorkerModule} from "./modules/worker.module";

@Module({
    imports: [
        WorkerModule.register('prime')
    ],
    controllers: [PrimeController],
})
export class AppModule {
}
