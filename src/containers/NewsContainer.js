import Filter from "../components/Filter";
import StoryList from "../components/StoryList";
import Title from "../components/Title";
import { useState, useEffect } from "react";

const NewsContainer = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
    getNews()},[]
    )

    const getNews = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(news => setNews(news))
    }

    

    return (
        <>
        <h1>This is the news container....</h1>
        <Title/>
        <StoryList/>
        </>
    );


};

export default NewsContainer;