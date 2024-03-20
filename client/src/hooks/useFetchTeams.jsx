import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getTeams } from '../redux/featuresSlice/teamSlice';

const useFetchTeams = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const apiURL = 'https://tournament-sport.onrender.com/api/teams/list';
        const fetchDataTeams = async () => {
            try {
                const res = await axios.get(apiURL);
                dispatch(getTeams(res.data));
            } catch (er) {
                console.log(er);
            }
        };
        fetchDataTeams();
    }, [dispatch]);
};

export default useFetchTeams;
