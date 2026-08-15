import { BaseDto } from "../base/types";

export interface ProjectDto extends BaseDto {
  name: string;
  description?: string;
}

export type QueryProjectDto = {};

export type CreateProjectDto = {};

export type UpdateProjectDto = {};
