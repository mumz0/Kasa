import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from "../../components/carousel/carousel"
import Headings from "../../components/headings/headings";
import Collapse from "../../components/collapse/collapse";

function Housing() {
	const navigate = useNavigate();
	const id = useParams().id
	const [data, setData] = useState([])
	useEffect(() => {
		async function getData(){
		const response = await axios.get("../data.json");
		const elem = await response.data.find((item) => item.id === id);
		setData(elem)
		if (elem === undefined) {
			navigate("/error", { state: { message: "data not found" } }); 
		}
	  }
	  getData()}, [id,navigate]);
	  	console.log(data.description)
		console.log(data.equipments)
		if (data.id){
			console.log(data)
			return (
        <main>
          <Carousel carouselItems={data.pictures} />
		  <Headings tags= {data.tags} title = {data.title} location = {data.location} name = {data["host"]["name"]} 
		  rating = {data.rating} picture = {data["host"]["picture"]} />
		  <section>
			<Collapse label = "Description" content = {data.description} />
			<Collapse label = "Equipments" content = {data.equipments} />
		  </section>
        </main>
      );
}}
export default Housing