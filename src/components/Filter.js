const Filter = ({handleFilterStories, searchedStory}) => {
    return (
        <>
        <h2>Search for your Good News Story:</h2>
        <input type="text" value={searchedStory} placeholder="search here" onChange={handleFilterStories}/>
        </>
    );
};
export default Filter;