// import { HttpClientModule } from "../../module";
import { HttpClientModule } from "../../module";
import { vueModule } from "vdi";
import App from "./AppView.vue";

export const AppModule = vueModule({
  declarations: App,
  imports: [HttpClientModule.forRoot()],
});
