import Filter from "../components/Filter";
import StoryList from "../components/StoryList";
// import Title from "../components/Title";
import { useState, useEffect } from "react";

const NewsContainer = () => {

    const [news, setNews] = useState([])
    const [stories, setStories] = useState([])
    const [selectedStoryId, setSelectedStoryId] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [filteredStories, setFilteredStories] = useState([])
    const [searchedStory, setSearchedStory] = useState("")

    function handleFilterStories(event){
        setFilteredStories("")
        setSearchedStory(event.target.value)
        const results = stories.filter(story => story.title.toLowerCase().includes(searchedStory))
        setFilteredStories(results)
    } 

    useEffect(() => {
    getStories()},[setSearchedStory]
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
                .then((stories) => {
                setStories(stories)
                setFilteredStories(stories)
            })
            
                    .then(setLoaded(true))
        })
            
    }        
    return (
        <>
        <h1>H4CK3R N3WZ</h1>
            <Filter searchedStory = {searchedStory} handleFilterStories={handleFilterStories}/>
            <StoryList stories={filteredStories} loaded={loaded}/>
        </>
    );



}

export default NewsContainer;