import { Component } from "@angular/core";
import { GeneralService } from "../services/general.service";

@Component({
  moduleId: module.id,
  selector: "[olympiad-root]",
  templateUrl: "../../templates/components/olympiad-root.component.html",
  styleUrls: [
    "../../styles/components/olympiad-root.component.css"
  ]
})

export class OlympiadRootComponent {
  general: GeneralService;
  item: number = 1;

  constructor (general: GeneralService) {
    this.general = general;
  }

  prev(): void {
    // animation
    this.item = this.item - 1 > 0 ? this.item - 1 : this.item;
    // animation
  }

  next(): void {
    // animation
    this.item = this.item + 1 < 6 ? this.item + 1 : this.item;
    // animation
  }
}
