export default function Contact(props){
    return(
    <div>
          <span className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img 
                        src="src/assets/phone-call.png" 
                        alt="phone icon" 
                    />
                    <p>{props.contact}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/assets/email.png" 
                        alt="mail icon"
                    />
                    <p>{props.mail}</p>
                </div>
        </span>
    </div>
    )
}