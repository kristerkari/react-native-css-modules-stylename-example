import { AppRegistry } from "react-native";
import { TapeRecorder } from "./src/TapeRecorder";

AppRegistry.registerComponent("TapeRecorder", () => TapeRecorder);
AppRegistry.runApplication("TapeRecorder", {
  rootTag: document.getElementById("react-app"),
});

if (module.hot) {
  module.hot.accept();
}
