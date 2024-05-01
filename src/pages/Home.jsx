import { getAnime, searchAnime } from "../utils/data"
import { useEffect, useState } from 'react'

export default function Home() {

    const [animes, setAnime] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAnime()
            setAnime(data)
        }
        fetchData()

    }, [animes])

    const animeAll = () => {
        return animes.map((anime,index) => {
            return (
                <div className="card bordered shadow-lg bg-base-100 p-1 gap-1 min-h-32 w-48" key={index}>
                    <div className='flex flex-col gap-2'>
                        <img className="rounded-xl w-24" src={anime.thumbnail} alt="image" />
                        <p className='flex items-end text-[0.7rem]'>{anime.upload_time}</p>
                    </div>
                    <div className="flex gap-2">
                        <a href={anime.detail_url}>
                            <h2 className="text-sm font-bold">{anime.title}</h2>
                        </a>
                    </div>
                </div>
            )
        })
    }

    const Search = async (q) => {
        if(q.length > 3){
            const datas = await searchAnime(q)
            
            setAnime(datas)
        }
      }

    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center gap-4 p-5">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" onChange={({target}) => Search(target.value)}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <div className='grid grid-cols-6 gap-2'>
                    {animeAll()}
                </div>
            </div>
        </>
    )
}