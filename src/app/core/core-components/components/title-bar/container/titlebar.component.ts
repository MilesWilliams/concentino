import { Component, OnInit } from "@angular/core";
import { remote } from "electron";

@Component({
  selector: "concentino-titlebar",
  templateUrl: "./titlebar.component.html",
  styleUrls: ["./titlebar.component.scss"]
})
export class TitlebarComponent implements OnInit {
  window: Electron.BrowserWindow;
  constructor() {
    this.window = remote.getCurrentWindow();
  }

  ngOnInit() {}

  minimize() {
    this.window.minimize();
  }

  maximize() {
    this.window.isMaximized()
      ? this.window.unmaximize()
      : this.window.maximize();
  }

  close() {
    this.window.close();
  }
}
