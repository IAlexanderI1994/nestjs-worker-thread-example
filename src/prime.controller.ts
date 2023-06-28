import {Controller, Get, Inject, Query} from '@nestjs/common';
import Piscina from "piscina";

@Controller('prime')
export class PrimeController {
    constructor(
        @Inject('prime')
        private readonly workerPool: Piscina
    ) {
    }

    @Get()
    hello() {
        return "Hello"
    }

    @Get()
    async generatePrimes(@Query('n') n = 10000000) {
        const primeNumbers = await this.workerPool.run(n);

        return primeNumbers
    }
}
// curl -X GET -w "\nTime total: %{time_total}s\n" "localhost:3000/prime/?n=10000000"
