const Filter = ({handleFilterStories}) => {
    return (
        <>
        <h2>Filter stories here</h2>
        <input type="text" placeholder="search here" onChange={handleFilterStories}/>
        </>
    );
};
export default Filter;