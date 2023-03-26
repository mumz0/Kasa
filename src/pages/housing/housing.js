import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from "../../components/carousel/carousel"

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

		if (data.id){
			console.log(data)
			return (
        <main>
          <Carousel carouselItems={data.pictures} />
        </main>
      );
}}
export default Housing