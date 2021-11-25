import Head from 'next/head'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import {fetchAlbums, fetchArtist, fetchTracks} from '../../utils/requests'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import LoadingComponent from '../../components/LoadingComponent'
import FlipMove from "react-flip-move";
import ThumbNailArtist from "../../components/ThumbNailArtist";
import ArtistTrucks from "../../components/ArtistTrucks";
import clsx from "clsx";
import ArtistAlbums from "../../components/ArtistAlbums";

export default function Artist() {

    let router = useRouter();
    const {query} = router;
    const [artist_id, setArtist_id] = useState(query.id)
    const [results, setResults] = useState();
    const [tracks, setTracks] = useState();
    const [albums, setAlbums] = useState();

    useEffect(() => {
        if (query.id) {

            (async function run() {

                await fetchArtist(query.id).then(res => {
                    setResults(res)
                }).catch(err => {
                    console.log(err)
                })


            })()
        } else {

        }
    }, [query])
    useEffect(() => {
        if (results) {
            (async function run() {
                await fetchTracks(query.id).then(res => {
                    //     console.log(res)
                    setTracks(res)
                }).catch(err => {
                    console.log(err)
                })

            })()
        }
    }, [results])
    useEffect(() => {
        if (results) {
            (async function run() {
                await fetchAlbums(query.id).then(res => {
                    //     console.log(res)
                    setAlbums(res)
                }).catch(err => {
                    console.log(err)
                })

            })()
        }
    }, [results])

    return (
        <div>

            <Head>
                <title>Artist - {results && results.data.name}</title>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
                      crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            </Head>


            {/* Header */}
            <Header/>
            {/* Nav */}
            <Nav/>

            {/* Results */}
            {
                !results ? <LoadingComponent text={'Fetching Artist Data'}/> :
                    <div className={'container'}>
                        <FlipMove className="px-5 my-10 flex flex-wrap justify-center">
                            <div className={clsx(' flex-1   flex-col')}>
                                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                                    Albums
                                </h2>
                                <div className={'albumlist'}>{!albums ? null :
                                    <ArtistAlbums result={albums.data.data}/>}</div>
                            </div>
                            <div className={clsx(' flex-1  flex-col')}>
                                <ThumbNailArtist result={results.data}/>
                            </div>

                            <div className={clsx(' flex-1  flex-col')}>
                                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                                    Trucks
                                </h2>
                                <div className={'tracklist'}>{!tracks ? null :
                                    <ArtistTrucks result={tracks.data.data}/>}</div>
                            </div>

                        </FlipMove>
                    </div>
            }

            {/* Test */}


        </div>
    )
}

/*
export async function getServerSideProps(context) {
  const pl_id = context.query.playlist;
  //const url = `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`;
  const results = await fetchPlaylist(pl_id).then(res=>res.json)
    return {
      props:{
        results: results
      }
    }
}*/
