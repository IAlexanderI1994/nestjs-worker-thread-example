import {Controller, Get, Inject, Query} from '@nestjs/common';
import Piscina from "piscina";

@Controller('prime')
export class PrimeController {
    constructor(
        @Inject('prime')
        private readonly workerPool: Piscina
    ) {
    }

    @Get('hello')
    hello() {
        return "Hello"
    }

    @Get()
    async generatePrimes(@Query('n') n = 10000000) {
        return await this.workerPool.run(n);
    }
}