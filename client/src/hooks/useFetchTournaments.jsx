import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getTournaments } from '../redux/featuresSlice/tournamentSlice';

const useFetchTournaments = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const apiURL = 'https://tournament-sport.onrender.com/api/tournament/all-tournaments';
        const fetchDataTournaments = async () => {
            try {
                const res = await axios.get(apiURL);
                dispatch(getTournaments(res.data));
            } catch (er) {
                console.log(er);
            }
        };
        fetchDataTournaments();
    }, [dispatch]);
};

export default useFetchTournaments;
