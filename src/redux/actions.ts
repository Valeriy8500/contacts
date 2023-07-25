import { FilterFormValues } from "src/components/FilterForm";

export const FILTER_ACTION = 'FILTER_ACTION';

export interface IFilterAction {
  type: typeof FILTER_ACTION;
  payload: FilterFormValues;
}

export function filterActionCreator(filterValues: FilterFormValues): IFilterAction {
  return { type: FILTER_ACTION, payload: filterValues }
}
