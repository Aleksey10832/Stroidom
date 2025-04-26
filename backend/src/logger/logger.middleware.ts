import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    if(req.headers.authorization){
      if(req.headers.authorization === 'secret'){
        const start = Date.now();
        res.on('finish', () => {
          const time = Date.now() - start;
          console.log(`Запрос ${req.url} выполнен за ${time}ms`)
        })
        next();
      }
      else{
        res.status(403).send("403 Доступ запрещён, ключ не верен")
      }
    }
    else{
      res.status(401).send("401 Ключ не предоставлен")
    }
  }
}

