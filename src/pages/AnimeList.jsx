import { useEffect, useState } from 'react';
import { getAnimeList } from '../utils/data';

export default function AnimeList() {

    const [animeList, setAnimeList] = useState({ arrValue: {}, arrKey: [], getUrlAnime: {}});

    useEffect(() => {
        const fetchAnimeData = async () => {
            const data = await getAnimeList();
            setAnimeList(data);
        };

        fetchAnimeData();
    }, []);

    // console.log({ animeList: animeList })

    const { arrValue, arrKey, getUrlAnime } = animeList;
    

    return (
        <div className='bg-gray-400'>
            <h1 className="text-3xl text-center my-10">Anime List</h1>
            <div className="p-2 grid grid-cols-2 gap-2">
                {arrKey.map((letter, index) => (
                    <div key={index} className='border rounded-xl p-2'>
                        <h1 className='text-8xl mb-5 flex justify-center'>{letter}</h1>
                        <div className='grid grid-cols-2'>
                            {arrValue[letter].map((title, idx) => (
                                <h1 key={idx} className='text-blue-900 font-bold'><a href={getUrlAnime[letter][idx]} target="_blank" rel="noopener noreferrer">• {title}</a></h1>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}