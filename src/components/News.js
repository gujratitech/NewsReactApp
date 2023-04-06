import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'
// import LoadingBar from 'react-top-loading-bar'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.props.category}-NewsMonkey`;
  }
  async upadateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // console.log(data)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.upadateNews();
  }

  handleNextClick = async () => {
    // console.log("Previous")
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data =await fetch(url);
    //   console.log(data)
    //   let parsedData = await data.json();
    //   // this.setState({loading: false});
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    // }
    this.setState({ page: this.state.page + 1 });
    this.upadateNews();
  };
  handlePrevClick = async () => {
    // console.log("Next");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true});
    // let data =await fetch(url);
    // console.log(data)
    // let parsedData = await data.json();
    // this.setState({
    //   page:this.state.page -1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({ page: this.state.page - 1 });
    this.upadateNews();
  };
  fetchData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    // console.log(data)
    let parsedData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.articles.length !== this.state.totalResults}
  // loader={<Spinner/>}
  >
    <div className="container">

        <div className="row">
          {this.state.articles.map((element) => {
              return  <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
            })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}

export default News;
