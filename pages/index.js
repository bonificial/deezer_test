import Head from 'next/head'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import {fetchGlobalChart, fetchPlaylist} from '../utils/requests'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import LoadingComponent from '../components/LoadingComponent'

export default function Home() {
    const {query} = useRouter();
    const [queryPlaylist, setqueryPlaylist] = useState(query.playlist)
    const [results, setResults] = useState(null);

    useEffect(() => {
        if (queryPlaylist) {

            (async function run() {

                await fetchPlaylist(queryPlaylist).then(res => {
                    setResults(res)
                }).catch(err => {
                    console.log(err)
                })


            })()
        } else {
            (async function run() {

                await fetchGlobalChart().then(res => {
                    console.log(res)
                    setqueryPlaylist(res.data.playlists.data[0].id)
                }).catch(err => {
                    console.log(err)
                })


            })()
        }

    }, [query, queryPlaylist])

    return (
        <div>


            <Head>
                <title>Home</title>

            </Head>


            {/* Header */}
            <Header/>
            {/* Nav */}
            <Nav/>

            {/* Results */}
            {
                results ? <Results results={results.data.data}/> : <LoadingComponent/>
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
