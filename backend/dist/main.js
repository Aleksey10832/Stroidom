"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://127.0.0.1:5500',
            'http://127.0.0.1:8000',
            'http://192.168.0.14:8000',
        ],
    });
    app.use('/file', express.static((0, path_1.join)(__dirname, '..', 'public')));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map