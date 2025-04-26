import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getAllCats() {
    return { catName: 'biba', age: 2 }
  }
}
