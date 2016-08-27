import React from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { push } from 'react-router-redux';
import { loadSearchResult } from './actions';
import classnames from 'classnames';
import RankList from 'components/RankList';
import styles from './styles.css';

export class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    const { language, location } = this.props;

    if (language || location) {
      this.props.loadSearchResult(language, location);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.language && !nextProps.location) { return; }

    const { language, location } = this.props;

    if (language !== nextProps.language || location !== nextProps.location) {
      this.props.loadSearchResult(nextProps.language, nextProps.location);
    }
  }

  getLanguageValue() {
    return findDOMNode(this.refs.language).value;
  }

  getLocationValue() {
    return findDOMNode(this.refs.location).value;
  }

  handleSearch() {
    let url = {
      pathname: '/search',
      query: null
    };
    const language = this.getLanguageValue().trim();
    const location = this.getLocationValue().trim();

    if (language) {
      url.query = { language };
    }

    if (location) {
      url.query = url.query || {};
      url.query.location = location;
    }

    if (url.query) {
      this.props.changeRoute(url);
    }
  }

  render() {
    const { language, location, result } = this.props;

    return (
      <div className="container">
        <div className={styles['form-item']}>
          <span className={styles['form-label']}>language</span>
          <input type="text" className={styles['form-input']} ref="language" defaultValue={language} />
        </div>
        <div className={styles['form-item']}>
          <span className={styles['form-label']}>location</span>
          <input type="text" className={styles['form-input']} ref="location" defaultValue={location} />
        </div>
        <div className={styles['form-item']}>
          <button className={classnames(styles['form-submit'], 'btn-submit')} onClick={this.handleSearch}>Search</button>
        </div>
        <RankList result={result} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const route = state.getIn(['route', 'locationBeforeTransitions']);
  const { language, location } = route.get('query').toJS();
  const result = state.get('search').users.toJS();

  return {
    language,
    location,
    result
  };
}

export default connect(mapStateToProps, {
  loadSearchResult,
  changeRoute: url => push(url)
})(SearchPage);
