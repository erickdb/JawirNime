import axios from 'axios';
import api from './api';

const listUrl = `${api.baseUrl}`
const url = `${api.popularApiUrl}`

export const getAnime = async () => {
    try {
        const anime = await fetch(`${url}/`)
        const animeJson = await anime.json()
        return animeJson.data
    } catch (error) {
        console.error("Error fetching anime:", error);
        return [];
    }
}

export const searchAnime = async (query) => {
    try {
    const animeSearch = await axios.get(`${url}/?s=${query}`)
    return animeSearch.data.data
    } catch (error) {
        console.error("Error fetching search anime:", error);
        return [];
    }
}

export const getAnimeList = async () => {

    try {
        const animeList = await axios.get(`${listUrl}/`);

        let arrKey = [];
        let arrValue = {};
        let getUrlAnime = {};

        Object.keys(animeList.data.data).forEach((key) => {
            if (key !== "0") {
                const animeArray = animeList.data.data[key];
                arrKey.push(key);
                arrValue[key] = animeArray.map((anime) => anime.title);
                getUrlAnime[key] = animeArray.map((anime) => anime.url);
            }
        });

        return { arrValue, arrKey , getUrlAnime};

    } catch (error) {
        console.error("Error fetching anime list:", error);
        return [];
    }
}
