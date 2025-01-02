import { capitalize, startCase } from "lodash";
import { result as titlesData } from "@/store/services/misc/data/getTitles.json";
import { result as genderData } from "@/store/services/misc/data/getGender.json";

type Optional = null | string;
type OptionalId = null | number | string;

export class PersonHelper {
  static displayName() {}
  static fullName(
    firstName?: Optional,
    middleName?: Optional,
    lastName?: Optional
  ) {
    let str = "";
    if (firstName) str += firstName;
    if (middleName) str += " " + middleName;
    if (lastName) str += " " + lastName;
    return startCase(str);
  }
  static title(arg?: OptionalId, asKey = false) {
    if (arg) {
      let found = titlesData.find(({ id, name }) => [id, name].includes(arg));
      if (found) return asKey ? String(found.id) : found.name;
    }
  }
  static gender(arg?: OptionalId, asKey = false) {
    if (arg) {
      let found = genderData.find(({ id, name }) => [id, name].includes(arg));
      if (found) return asKey ? String(found.id) : found.name;
    }
  }
  static age() {}
  static dateOfBirth() {}
  static email() {}
  static nationality() {}
  static stateOfOrigin() {}
  static relationship() {}
  static identity() {}
  static role() {}
  static patientCode() {}
}
