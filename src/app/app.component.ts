import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'ng-image-viewer';
  pointSize = 7;
  element: Element | undefined = undefined;
  root: Element | undefined = undefined;
  ctx: CanvasRenderingContext2DSettings | any = undefined;
  canvas: HTMLCanvasElement | undefined= undefined;

  ngOnInit() {
    this.getPosition(235, 270, 70);
    this.getPosition(285, 270, 170);
  }

  getPosition(x: number, y: number, color: number) {
    this.element = <Element>this.root;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawCoordinates(x, y, color);
  }


  drawCoordinates(x: number, y:number, color: number) {
    const grd = this.ctx.createLinearGradient(0, 0, color, 0);
    grd.addColorStop(0, "blue");

    // create a rectangle in the middle of the canvas
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(Number(x), Number(y), 150, 75);
  }

  rgbToHex(r: number, g: number, b: number) {
    if (r > 255 || g > 255 || b > 255){
      throw "Invalid color component";
    }
    return ((r << 16) | (g << 8) | b).toString(16);
  }
}
