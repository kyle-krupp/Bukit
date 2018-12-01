import React from "react";
import Moment from "react-moment";
import "./News.css";


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?q=" + "New York City" + "&pageSize=3&apiKey=e98708c0ae604c1c80859a0725b9b24a")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.articles
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    {items.map(item => (
                        <ul key={item.title}>
                            <li>
                                <h5>
                                    {item.title}
                                </h5>
                            </li>
                            <li>
                                <img class="articleImage" src={item.urlToImage} width="100" height="75"></img>
                            </li>
                            <li>
                                <Moment format="MM/DD/YYYY">
                                    {item.publishedAt}
                                </Moment>
                            </li>
                            <li>
                                <a href={item.url}>Read Here</a>
                            </li>
                        </ul>
                    ))}
                </div>
            )
        }
    }
}

export default News;