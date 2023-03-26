import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"
import Card from "./card"
// import housings from "../../assets/data.json"
function Locations(){
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("./data.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
	}, []);
    return (
            <div className="cards_container">
                <div className="cont">
                {data.map((location, id) => (
                    <Card key={id} obj={location} />
                ))}
                </div>
            </div>
    )
}
export default Locations