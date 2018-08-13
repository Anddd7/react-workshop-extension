import React from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
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
        this.props.dispatch(getCalculatedPublishedRecord(res.data))
        this.props.dispatch(getEnd())
      });
  }

  render () {
    const { top10PublishedRecord, loading } = this.props;
    console.log(top10PublishedRecord);
    return (
      <div className="App">
        {loading && <span >载入中...</span>}
        {top10PublishedRecord.sortByCategory &&
          (<div>
            <h2>各类别投稿</h2>
            <BarChart
              width={1000} height={300}
              data={top10PublishedRecord.sortByCategory.filter(record => record.publishedVideos > 0)}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoryName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="publishedVideos" fill="#EE6363" />
              <Bar dataKey="newVideosLastHalfHour" fill="#9932CC" />
              <Bar dataKey="newVideosLastHour" fill="#4F94CD" />
            </BarChart>
          </div>)
        }

        {top10PublishedRecord.sortByTotalPublished &&
          (<div>
            <h2>今日投稿榜单</h2>
            <BarChart
              width={1000} height={300}
              data={top10PublishedRecord.sortByTotalPublished}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoryName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="publishedVideos" fill="#8884d8" />
            </BarChart>
          </div>)
        }
        {top10PublishedRecord.sortByLastHalfHourPublished &&
          (<div>
            <h2>半小时投稿榜单</h2>
            <BarChart
              width={1000} height={300}
              data={top10PublishedRecord.sortByLastHalfHourPublished}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoryName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="newVideosLastHalfHour" fill="#8884d8" />
            </BarChart>
          </div>)
        }
        {top10PublishedRecord.sortByLastHourPublished &&
          (<div>
            <h2>一小时投稿榜单</h2>
            <BarChart
              width={1000} height={300}
              data={top10PublishedRecord.sortByLastHourPublished}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoryName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="newVideosLastHour" fill="#8884d8" />
            </BarChart>
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
