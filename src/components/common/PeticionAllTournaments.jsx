import React from 'react'
import { useDispatch } from 'react-redux';
import { getTournaments } from '../../redux/featuresSlice/tournamentSlice';
import axios from 'axios';
import { useEffect } from 'react';

const PeticionAllTournaments = () => {
  
    const dispatch = useDispatch();
    const apiURL = 'https://tournament-sport.onrender.com/api/tournament/all-tournaments';

			useEffect(() => {
				const fetchData = async () => {
				  try {
					const res = await axios.get(apiURL);
					console.log(res.data);
					dispatch(getTournaments(res.data))
				  } catch (er) {
					console.log(er);
				  }
				};
			
				fetchData();
			  }, []);
	return null
}

export default PeticionAllTournaments;