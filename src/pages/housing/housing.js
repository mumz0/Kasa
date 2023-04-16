import React from "react"
import {useEffect, useState} from "react"
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from "../../components/carousel/carousel"
import Collapse from "../../components/collapse/collapse";
import Tag from "../../components/tag/tag";
import Profile from "../../components/profile/profile";
import Rating from "../../components/rating/rating";

function Housing() {
	const navigate = useNavigate();
	const id = useParams().id
	const [data, setData] = useState([])
	
	useEffect(() => {
		async function getData() {
		  try {
			const response = await fetch("../data.json");
			const jsonData = await response.json();
			const elem = jsonData.find((item) => item.id === id);
			if (!elem) {
			  throw new Error("Data not found");
			}
			setData(elem);
		  } catch (error) {
			navigate("/error", { state: { message: error.message } });
		  }
		}
		getData();
	  }, [id, navigate]);

		if (data.id){
			return (
        <div>
          <Carousel carouselItems={data.pictures} />
		  <div className="headings">
        <div className="headings__description-container">
          <h1 className="headings__title">{data.title}</h1>
          <p className="headings__location">{data.location}</p>
          <Tag key={data.tags} tags={data.tags} />
        </div>
        <div className="headings__profile-container">
          <Profile name={data["host"]["name"]} picture={data["host"]["picture"]} />
          <Rating rating={data.rating} />
        </div>
      </div>
		  <section className='collapses'>
			<Collapse label = "Description" content = {data.description} />
			<Collapse label = "Equipments" content = {
                  <ul>{data.equipments.map((equipment) => 
                    <li key={equipment}>{equipment}</li>)}
                  </ul>} />
		  </section>
        </div>
      );
}}
export default Housing