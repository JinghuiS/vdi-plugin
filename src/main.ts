import { createModule } from "vdi";
import { AppModule } from "./app/App.module";

createModule(AppModule).then((vue) => {
  vue.mount("#app");
});
