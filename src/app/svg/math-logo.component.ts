import { Component, OnInit } from "@angular/core";
declare let SVGMorpheus:any;

@Component({
  moduleId: module.id,
  selector: "math-logo",
  templateUrl: "../../templates/svg/math-logo.component.html"
})
export class MathLogoComponent implements OnInit {
  ngOnInit() {
    let pi = new SVGMorpheus ("#icon");
    let icons = ["pi", "equals", "three", "point", "one", "four"];
    let i = 1;
    pi.to (icons[0], {duration: 1000, easing: "cubic-in-out", rotation: "none"});
    setInterval (function() {
      pi.to (icons[i], {duration: 1000, easing: "cubic-in-out", rotation: "none"});
      i = (i + 1) % 6;
    }, 1500);
  }
}
