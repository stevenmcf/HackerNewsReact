import Filter from "../components/Filter";
import StoryList from "../components/StoryList";
import Title from "../components/Title";
import { useState, useEffect } from "react";

const NewsContainer = () => {

    const [news, setNews] = useState([])
    const [stories, setStories] = useState([])
    const [selectedStoryId, setSelectedStoryId] = useState({})

    useEffect(() => {
    getStories()},[]
    )

    // 25344354 - use this for checking API
    const getStories = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
                .then(news => {

                    const newsStories = news.slice(0, 20).map((id) => {
                        return fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                            .then(res => res.json())
            });

            Promise.all(newsStories)
            .then((stories) => setStories(stories))
        })
            
    }        
    return (
        <>
        <h1>This is the news container....</h1>
            <Title/>
            <StoryList stories={stories}/>
        </>
    );



}

export default NewsContainer;