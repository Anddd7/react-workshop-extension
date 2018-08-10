import React from 'react';
import { connect } from 'react-redux';
import { getCalculatedPublishedRecord, getStart, getEnd } from './actions';
import API from './api';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.refresh();
  }

  refresh = () => {
    this.props.dispatch(getStart());
    API.BILIBILI.get('/result/published')
      .then(res => {
        this.props.dispatch(getCalculatedPublishedRecord(res))
        this.props.dispatch(getEnd())
      });
  }

  render () {
    const { top10PublishedRecord, loading } = this.props;
    console.log(top10PublishedRecord);
    return (
      <div className="App">
        {loading && <span >载入中...</span>}
        {top10PublishedRecord.sortByTotalPublished &&
          (<div>
            <h2>今日投稿榜单</h2>
            <span>{JSON.stringfy(top10PublishedRecord.sortByTotalPublished)}</span>
          </div>)
        }
        {top10PublishedRecord.sortByLastHalfHourPublished &&
          (<div>
            <h2>半小时投稿榜单</h2>
            <span>{JSON.stringfy(top10PublishedRecord.sortByLastHalfHourPublished)}</span>
          </div>)
        }
        {top10PublishedRecord.sortByLastHourPublished &&
          (<div>
            <h2>一小时投稿榜单</h2>
            <span>{JSON.stringfy(top10PublishedRecord.sortByLastHourPublished)}</span>
          </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  top10PublishedRecord: state.top10PublishedRecord,
  loading: state.loading,
});

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
