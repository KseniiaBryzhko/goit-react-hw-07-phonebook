export const getContacts = state => state.contacts;

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;

export const getFilter = state => state.filter;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      number.trim().includes(normalizedFilter)
  );

  return filteredContacts;
};
