import { Middleware } from "redux";
import { RootState } from "./store";
import { IFilterAction } from "./actions";
import { logAction } from "./logAction";

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: IFilterAction) {
      logAction(action);
      next(action);
    }
  }
};