import React, { useState } from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ContactDto } from 'src/types/dto/ContactDto';
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__';
import { Provider } from 'react-redux';
import { persistor, store } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage
} from 'src/pages';

export const MainApp = () => {
  const contactsState = useState<ContactDto[]>(DATA_CONTACT);

  const favoriteContactsState = useState<FavoriteContactsDto>([
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id
  ]);

  const groupContactsState = useState<GroupContactsDto[]>(DATA_GROUP_CONTACT);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={
                  <ContactListPage
                    favoriteContactsState={favoriteContactsState}
                    groupContactsState={groupContactsState}
                  />
                } />
                <Route path="contact">
                  <Route index element={
                    <ContactListPage
                      favoriteContactsState={favoriteContactsState}
                      groupContactsState={groupContactsState}
                    />
                  } />
                  <Route path=":contactId" element={
                    <ContactPage
                      contactsState={contactsState}
                      favoriteContactsState={favoriteContactsState}
                      groupContactsState={groupContactsState}
                    />
                  } />
                </Route>
                <Route path="groups">
                  <Route index element={
                    <GroupListPage
                      contactsState={contactsState}
                      favoriteContactsState={favoriteContactsState}
                      groupContactsState={groupContactsState}
                    />
                  } />
                  <Route path=":groupId" element={
                    <GroupPage
                      contactsState={contactsState}
                      favoriteContactsState={favoriteContactsState}
                      groupContactsState={groupContactsState}
                    />
                  } />
                </Route>
                <Route
                  path="favorit"
                  element={
                    <FavoritListPage
                      contactsState={contactsState}
                      favoriteContactsState={favoriteContactsState}
                      groupContactsState={groupContactsState}
                    />
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
