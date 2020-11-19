"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverPort = process.env.SERVER_PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(serverPort, () => {
        console.info(`Server start on http://localhost:${serverPort}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map