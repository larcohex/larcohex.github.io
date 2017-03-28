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
  loading: boolean = true;

  orientation(): string {
    return GeneralService.orientation();
  }
}
