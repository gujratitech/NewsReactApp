import React, {useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'
// import LoadingBar from 'react-top-loading-bar'

const News =(props)=> {

  const[articles,setArticles] = useState([])
  const[loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);
  // document.title = `${props.category}-NewsMonkey`;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults:0
  //   };
    
 const upadateNews = async ()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    // console.log(data)
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
  }
//  async componentDidMount() {
//     this.upadateNews();
//   }
 useEffect(()=>{
  upadateNews();
 },[])

 const handleNextClick = async () => {
    // console.log("Previous")
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){

    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${this.state.page+1}&pageSize=${props.pageSize}`;
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
   setPage(page+1)
   upadateNews();
  };
 const handlePrevClick = async () => {
    // console.log("Next");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${this.state.page-1}&pageSize=${props.pageSize}`
    // this.setState({loading: true});
    // let data =await fetch(url);
    // console.log(data)
    // let parsedData = await data.json();
    // this.setState({
    //   page:this.state.page -1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
   setPage(page-1)
   upadateNews();
  };
const fetchData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
 setPage(page+1)
    
const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81f9102363e34466bd8f548f165d8d5a&page=${page}&pageSize=${props.pageSize}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    
    // this.setState({ loading: true });
    let data = await fetch(url);
    // console.log(data)
    let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)  
  }

    return (
      <div className="container" style={{marginTop:'90px'}}>
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchData}
  hasMore={articles.length !== totalResults}
  // loader={<Spinner/>}
  >
    <div className="container">

        <div className="row">
          {articles.map((element) => {
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

 News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
 News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
