import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import MyTable from 'components/MyTable';
import MyList from 'components/MyTable';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';
import MyListItem from 'containers/MyListItem';

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }
  
  // This is where the actual logic for repo happens.
  if (repos !== false) {
    console.log(repos);
    return <List items={repos} component={MyListItem} />;
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ReposList;
