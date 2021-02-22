import { AfterViewInit, Component } from '@angular/core';
import Phaser = require("phaser")
import { IsometricScene } from './isometric-scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-phaser-tiled-isometric';

ngAfterViewInit():void {let phaserGame = new Phaser.Game(IsometricScene.sceneConfig)
}}
