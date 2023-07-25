import React, { ReactElement, memo } from 'react';
import { CommonPageProps } from './types';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { filterActionCreator } from 'src/redux/actions';

export const ContactListPage = memo<CommonPageProps>(({ groupContactsState }): ReactElement => {
  const contacts = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  const onSubmit = (filterValues: FilterFormValues) => {
    dispatch(filterActionCreator(filterValues));
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groupContactsState[0]} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
})
