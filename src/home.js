const Home = () => {
    const handleclik = () =>console.log("hello");
    const handleclick = (name) =>{
        console.log(`hello ${name}`);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleclik}>click me</button>
            <button onClick={()=>{handleclick("kachi")}}>click</button>
        </div>
     );
}
 
export default Home;