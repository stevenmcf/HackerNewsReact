import Filter from "../components/Filter";
import StoryList from "../components/StoryList";
import Title from "../components/Title";
import { useState, useEffect } from "react";

const NewsContainer = () => {

    const [news, setNews] = useState([])
    const [story, setStory] = useState({})
    const [selectedStoryId, setSelectedStoryId] = useState({})

    useEffect(() => {
    getNews()},[]
    )

    // 25344354 - use this for checking API
    const getNews = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(news => setNews(news))
        .then(news.forEach(selectedStoryId => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${selectedStoryId}.json`)
            .then(res => res.json())
            .then(story => setStory(story))

            Promise.all([news, story]).then((values) => {
                console.log(values)
            }
            
        ))
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