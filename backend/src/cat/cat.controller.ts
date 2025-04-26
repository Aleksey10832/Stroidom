import { Controller } from '@nestjs/common';
import { CatService } from './cat.service';
import { Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
    constructor(private readonly _cat: CatService){}
    @Get()
    getCats() {
        return this._cat.getAllCats()
    }
}
