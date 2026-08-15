import { Base } from "../base/model";
import { ProjectDto } from "./types";

export class Project extends Base {
  constructor(_: ProjectDto) {
    super(_);
  }
}
