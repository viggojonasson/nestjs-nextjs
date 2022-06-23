import { Module } from "@nestjs/common";

import { AppModule } from "./app/app.module";
import { ViewModule } from "./view/view.module";

@Module({
  imports: [AppModule, ViewModule],
})
export class ServerModule {}
