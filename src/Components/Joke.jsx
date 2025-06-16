export default function Joke(prop){
    return(
        <>
        <div className="joke-container">
            {prop.setup &&  <p className="setup">{prop.setup}</p>}
            <h3>{prop.punchline}</h3>
            <p><img src="src/assets/thumbs.png" width={20}/>{prop.upvotes}   <img src="src/assets/down.png" width={20}/>{prop.downvotes}</p>
            <p>Is this joke a pun?-{prop.ispun ? "Is a pun" : "Not a pun"}</p>
            <hr /> 
            </div>  
            </>


    )

}
