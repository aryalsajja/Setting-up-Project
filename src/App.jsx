import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Entry from "./Components/Entry"
import data from "./data"

export default function App(){
    const traveldata = data.map((value) => {
        return(
            <Entry 
            key ={value.id}
            value={value}
            // img ={{src:value.img.src , alt:value.img.alt}}
            // title={value.title}
            // country={value.country}
            // gmaplink={value.googleMapsLink}
            // date={value.dates}
            // text={value.text}
            />
        )
    }
    )


    return(
        <div>
            <Header/>
            <main>
                {traveldata}
            </main>
            <Footer/>

        </div>
    )
}





//  img={{
//                     src:"https://scrimba.com/links/travel-journal-japan-image-url", alt:"Fuji"
//                 }}
//                 title="Mount Fuji"
//                 country = "J A P A N"
//                 gmaplink = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//                 date="12 Jan, 2021 - 24 Jan, 2021"
//                 text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
//                 Mount Fuji is the single most popular tourist site in Japan, for both"  








// import Joke from "./Components/Joke"

// export default function App() {
//     return(
//         <div>
//             <Joke
//                 setup = "I got my daughter a fridge for her birthday."
//                 punchline = "I can't wait to see her face light up when she opens it."
//                 upvotes = {45}
//                 downvotes = {12}
//                 ispun = {true}
            
//             />
//             <Joke
//                 setup = " How did the hacker escape the police?"
//                 punchline = "He just ransomware!"
//                 upvotes = {14}
//                 downvotes = {22}
//                 ispun={true}

            
//             />
//             <Joke
//                 setup = " Why don't pirates travel on mountain roads?"
//                 punchline = "Scurvy."
//                 upvotes = {12}
//                 downvotes = {32}
//                 ispun = {false}

            
//             />
//             <Joke
//                 setup = "Why do bees stay in the hive in the winter?"
//                 punchline = "Swarm."
//                 upvotes = {24}
//                 downvotes = {21}
//                 ispun = {true}

            
//             />
//             <Joke
//                 setup = "What's the best thing about Switzerland?"
//                 punchline = "I don't know, but the flag is a big plus!"
//                 upvotes = {56}
//                 downvotes = {26}
//                 ispun = {false}

            
//             />
//             <Joke
//                 punchline = "It’s hard to explain puns to kleptomaniacs because they always take things literally. "
//                 upvotes = {46}
//                 downvotes = {34}
//                 ispun = {true}

//                 />
//         </div>
//     )


// }



// export default function App() {
//     return(
//             <div className="contacts grid">
//                 <Contact className=""
//                     img="src/assets/Whiskerson.jpg"
//                     name="Mr. Whiskerson"
//                     contact="(212) 555-1234"
//                     mail="mr.whiskaz@catnap.meow"
//                 />
//                 <Contact
//                     img="src/assets/Fluffykins.jpeg"
//                     name="Fluffykins"
//                     contact="(212) 598-2345"
//                     mail="fluff@me.com"
//                 />
//                 <Contact
//                     img="src/assets/Felix.webp"
//                     name="Felix"
//                     contact="(212) 244-4567"
//                     mail="thecat@hotmail.com"
//                     />
//                 <Contact
//                     img="src/assets/Pumpkin.jpg"
//                     name="Pumpkin"
//                     contact="(0800) 235-653"
//                     mail="pumpkin@scrimba.com"
//                 />
//             </div> 
//        )
// }