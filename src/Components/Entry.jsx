export default function Entry(props){
    console.log(props)
    return(
        <main className="Entry">
            <div className="image-container"> 
              <img 
              className="mainimg" 
              src={props.value.img.src} 
              alt={[props.value.img.alt]}
              />
            </div>

        <nav className="text-container">
         <div>
            <img src="src\assets\location.png" width={15}/>
            <span>{props.value.country}</span>
            <a href={props.value.googleMapsLink}> View on Google maps </a>
            <h1>{props.value.title}</h1>
        </div>

        <h3>{props.value.date}</h3>
        <p>{props.value.text}</p> 
        </nav>

        </main>
    )
}