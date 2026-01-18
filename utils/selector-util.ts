import { ListType, SeriesType, EnumType } from "@/types/common-types";

type ModelType = {
  id: number | string;
  name?: string;
  title?: string;
};

function fromList(arr: ListType | SeriesType) {
  return arr.map((item) => ({
    value: String(item),
    label: String(item),
  }));
}

function fromIndexedList(arr: ListType | SeriesType) {
  return arr.map((item, i) => ({
    value: String(i),
    label: String(item),
  }));
}

function fromEnum(obj: EnumType) {
  return Object.entries(obj).map(([key, value]) => ({
    value: key,
    label: String(value),
  }));
}

function fromCollection(arr: ModelType[]) {
  return arr.map(({ id, name }) => ({
    value: String(id),
    label: name,
  }));
}

function fromCollectionWithTitle(arr: ModelType[]) {
  return arr.map(({ id, title }) => ({
    value: String(id),
    label: title,
  }));
}

export const selectorUtil = {
  fromList,
  fromIndexedList,
  fromEnum,
  fromCollection,
  fromCollectionWithTitle,
};
