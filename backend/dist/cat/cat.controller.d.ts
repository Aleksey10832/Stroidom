import { CatService } from './cat.service';
export declare class CatController {
    private readonly _cat;
    constructor(_cat: CatService);
    getCats(): {
        catName: string;
        age: number;
    };
}
