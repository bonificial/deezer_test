import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {HomeIcon} from '@heroicons/react/outline'
import React from "react";
import styles from './styles.module.css';
import deezerlogo from '../assets/deezer.png'
import Head from "next/head";
import {useRouter} from "next/dist/client/router";

export default function Header() {
    const router = useRouter();
    return (
        <>     <Head>

            <link rel="icon" href="/favicon.ico"/>
        </Head>
            <header className="flex flex-col sm:flex-row justify-start items-center h-auto">
                <div className="flex flex-col group items-center cursor-pointer  w-12 sm:w-20 hover:text-white"
                     onClick={() => router.push('/')}>
                    <Image alt="" src={deezerlogo} objectFit={'contain'} layout={'intrinsic'} height={80} width={100}/>
                </div>

                <div className="flex flex-grow justify-start max-w-2xl">
                    <HeaderItem title='HOME' Icon={HomeIcon}/>
                </div>
                <div className={styles.searchContainer}>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="search" type="text" placeholder={'Search Here'}/>
                </div>

            </header>
        </>
    )
}
