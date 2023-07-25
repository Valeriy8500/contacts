import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { IFilterAction, FILTER_ACTION } from "./actions";

export function filterReducer(state = DATA_CONTACT, action: IFilterAction) {
  switch (action.type) {
    case FILTER_ACTION:
      let filteredСontacts = DATA_CONTACT;

      if (action.payload.name) {
        const { name } = action.payload;
        filteredСontacts = filteredСontacts.filter((item) => (
          item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        ));
      }

      if (action.payload.groupId) {
        const groupContacts = DATA_GROUP_CONTACT.find(({ id }) => id === action.payload.groupId);
        if (groupContacts) {
          filteredСontacts = filteredСontacts.filter(({ id }) => (
            groupContacts.contactIds.includes(id)
          ))
        }
      }
      return filteredСontacts;
  }

  return state;
}