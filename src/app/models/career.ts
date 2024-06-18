import { Company } from "./company";
import { SkillEnum, WorkEnum } from "./enums";

export interface Career {
  start: Date,
  end: Date | null,
  company: Company,
  type: WorkEnum,
  skills: SkillEnum[],
  description: string
}
