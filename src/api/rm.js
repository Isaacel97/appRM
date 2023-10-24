import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { enviroment as ENV } from '../util/constants';
import HomeScreen from '../screen/HomeScreen';

const Rm = () => {
    const [characters, setCharacters] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(ENV.API_URL_RM);
            setCharacters(response.data.results);
            setNextUrl(response.data.info.next);
            console.log('response info::: ', response.data.info.next);
        } catch (error) {
            console.error('ERR fetchData::: ', error);
        }
    }

    const loadMoreData = async () => {
        if (isLoadingMore) return;

        setIsLoadingMore(true);
        try {
            if (nextUrl) {
                const response = await axios.get(nextUrl);
                setCharacters([...characters, ...response.data.results]);
                setNextUrl(response.data.info.next);
            }
        } catch (error) {
            console.error('ERR loadMoreData::: ', error);
        } finally {
            setIsLoadingMore(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <HomeScreen characters={characters} title={'Personajes'} loadMoreData={loadMoreData} />
    )
}

export default Rm;