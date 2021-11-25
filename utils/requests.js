import axios from "axios";

const API_KEY = process.env.API_KEY;
const API_SERVER = process.env.API_SERVER || 'https://api.deezer.com'

export const fetchData = async (url, data) => {

    const url_ = `${API_SERVER}${url}`;

    return axios.get(url_);


}

export const fetchPlaylist = async (id) => {
    const url_ = `${API_SERVER}/playlist/${id}/tracks`;
    return axios.get(url_);
}
export const fetchArtist = async (id) => {
    const url_ = `${API_SERVER}/artist/${id}`;
    return axios.get(url_);
}
export const fetchTracks = async (id) => {
    const url_ = `${API_SERVER}/artist/${id}/top?limit=20`;
    return axios.get(url_);
}
export const fetchAlbums = async (id) => {
    const url_ = `${API_SERVER}/artist/${id}/albums`;
    return axios.get(url_);
}
export const fetchGlobalChart = () => {
    //  return chart;
    return fetchData('/chart/0');
}
export const chart = {
    "tracks": {
        "data": [],
        "total": 10
    },
    "albums": {},
    "artists": {},
    "playlists": {
        "data": [
            {
                "id": 1440614715,
                "title": "Afro Hits",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/1440614715",
                "picture": "https://api.deezer.com/playlist/1440614715/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/cc8fef89d3cd23f67c6e9a5fcc69a9fa/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/cc8fef89d3cd23f67c6e9a5fcc69a9fa/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/cc8fef89d3cd23f67c6e9a5fcc69a9fa/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/cc8fef89d3cd23f67c6e9a5fcc69a9fa/1000x1000-000000-80-0-0.jpg",
                "checksum": "c2c6452548b6931ca9da37054c844d51",
                "tracklist": "https://api.deezer.com/playlist/1440614715/tracks",
                "creation_date": "2015-11-04 12:21:29",
                "md5_image": "cc8fef89d3cd23f67c6e9a5fcc69a9fa",
                "picture_type": "playlist",
                "user": {
                    "id": 3115990644,
                    "name": "Sot - Deezer Afro Editor",
                    "tracklist": "https://api.deezer.com/user/3115990644/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 8843163142,
                "title": "Kenyan Hits",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/8843163142",
                "picture": "https://api.deezer.com/playlist/8843163142/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/556488f04f13ef459ed3bf646ababba5/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/556488f04f13ef459ed3bf646ababba5/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/556488f04f13ef459ed3bf646ababba5/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/556488f04f13ef459ed3bf646ababba5/1000x1000-000000-80-0-0.jpg",
                "checksum": "f1e42a87a611e0a28d6b14d55cda0a56",
                "tracklist": "https://api.deezer.com/playlist/8843163142/tracks",
                "creation_date": "2021-03-16 12:02:19",
                "md5_image": "556488f04f13ef459ed3bf646ababba5",
                "picture_type": "playlist",
                "user": {
                    "id": 304252685,
                    "name": "Sot - Deezer South Africa Editor",
                    "tracklist": "https://api.deezer.com/user/304252685/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 1677006641,
                "title": "Hip-Hop Hits",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/1677006641",
                "picture": "https://api.deezer.com/playlist/1677006641/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/c6f67b3d21ba16e401e9007ca33d14dd/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/c6f67b3d21ba16e401e9007ca33d14dd/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/c6f67b3d21ba16e401e9007ca33d14dd/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/c6f67b3d21ba16e401e9007ca33d14dd/1000x1000-000000-80-0-0.jpg",
                "checksum": "5b2a82741d5639a21858e4123f39de16",
                "tracklist": "https://api.deezer.com/playlist/1677006641/tracks",
                "creation_date": "2016-03-18 16:34:51",
                "md5_image": "c6f67b3d21ba16e401e9007ca33d14dd",
                "picture_type": "playlist",
                "user": {
                    "id": 917475151,
                    "name": "Narjes - Deezer Rap Editor",
                    "tracklist": "https://api.deezer.com/user/917475151/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 3153080842,
                "title": "Afrobeats",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/3153080842",
                "picture": "https://api.deezer.com/playlist/3153080842/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/783c8245ea4b51dae1649238be4b3a7c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/783c8245ea4b51dae1649238be4b3a7c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/783c8245ea4b51dae1649238be4b3a7c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/783c8245ea4b51dae1649238be4b3a7c/1000x1000-000000-80-0-0.jpg",
                "checksum": "ab958962f000ee00212d3b802c6e4a00",
                "tracklist": "https://api.deezer.com/playlist/3153080842/tracks",
                "creation_date": "2017-05-22 16:45:56",
                "md5_image": "783c8245ea4b51dae1649238be4b3a7c",
                "picture_type": "playlist",
                "user": {
                    "id": 3115990644,
                    "name": "Sot - Deezer Afro Editor",
                    "tracklist": "https://api.deezer.com/user/3115990644/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 7437750224,
                "title": "Afro Chill",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/7437750224",
                "picture": "https://api.deezer.com/playlist/7437750224/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/f105ccd0531dc9eb24e324bf41e386f6/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/f105ccd0531dc9eb24e324bf41e386f6/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/f105ccd0531dc9eb24e324bf41e386f6/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/f105ccd0531dc9eb24e324bf41e386f6/1000x1000-000000-80-0-0.jpg",
                "checksum": "c5858b8cfa258c24d1f2f3efe46e9d18",
                "tracklist": "https://api.deezer.com/playlist/7437750224/tracks",
                "creation_date": "2020-03-27 14:38:50",
                "md5_image": "f105ccd0531dc9eb24e324bf41e386f6",
                "picture_type": "playlist",
                "user": {
                    "id": 3115990644,
                    "name": "Sot - Deezer Afro Editor",
                    "tracklist": "https://api.deezer.com/user/3115990644/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 2135000122,
                "title": "All Eyes On Africa",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/2135000122",
                "picture": "https://api.deezer.com/playlist/2135000122/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/f1703476e0fe027aef886aa6538cfdd9/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/f1703476e0fe027aef886aa6538cfdd9/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/f1703476e0fe027aef886aa6538cfdd9/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/f1703476e0fe027aef886aa6538cfdd9/1000x1000-000000-80-0-0.jpg",
                "checksum": "af1253b858bc9fd9ad872cae69973eca",
                "tracklist": "https://api.deezer.com/playlist/2135000122/tracks",
                "creation_date": "2016-08-16 15:54:58",
                "md5_image": "f1703476e0fe027aef886aa6538cfdd9",
                "picture_type": "playlist",
                "user": {
                    "id": 3115990644,
                    "name": "Sot - Deezer Afro Editor",
                    "tracklist": "https://api.deezer.com/user/3115990644/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 1996494362,
                "title": "Rap Bangers",
                "public": true,
                "nb_tracks": 52,
                "link": "https://www.deezer.com/playlist/1996494362",
                "picture": "https://api.deezer.com/playlist/1996494362/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/7fa422e4b47108fb55cce04147929802/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/7fa422e4b47108fb55cce04147929802/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/7fa422e4b47108fb55cce04147929802/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/7fa422e4b47108fb55cce04147929802/1000x1000-000000-80-0-0.jpg",
                "checksum": "259d02923e1d2f7287bdaf1b82d342ca",
                "tracklist": "https://api.deezer.com/playlist/1996494362/tracks",
                "creation_date": "2016-07-05 17:34:42",
                "md5_image": "7fa422e4b47108fb55cce04147929802",
                "picture_type": "playlist",
                "user": {
                    "id": 917475151,
                    "name": "Narjes - Deezer Rap Editor",
                    "tracklist": "https://api.deezer.com/user/917475151/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 2098157264,
                "title": "Hits of the Moment",
                "public": true,
                "nb_tracks": 60,
                "link": "https://www.deezer.com/playlist/2098157264",
                "picture": "https://api.deezer.com/playlist/2098157264/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/b9fc2afb68f8873f59422b962c7aa7f8/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/b9fc2afb68f8873f59422b962c7aa7f8/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/b9fc2afb68f8873f59422b962c7aa7f8/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/b9fc2afb68f8873f59422b962c7aa7f8/1000x1000-000000-80-0-0.jpg",
                "checksum": "9a1757e66e658613b9533ac0685d1301",
                "tracklist": "https://api.deezer.com/playlist/2098157264/tracks",
                "creation_date": "2016-08-04 18:42:22",
                "md5_image": "b9fc2afb68f8873f59422b962c7aa7f8",
                "picture_type": "playlist",
                "user": {
                    "id": 753546365,
                    "name": "Fábio - Deezer Pop Editor",
                    "tracklist": "https://api.deezer.com/user/753546365/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 1976454162,
                "title": "Chill Hits",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/1976454162",
                "picture": "https://api.deezer.com/playlist/1976454162/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/e1c1a8f25d88f3087b39927df7baf832/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/e1c1a8f25d88f3087b39927df7baf832/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/e1c1a8f25d88f3087b39927df7baf832/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/e1c1a8f25d88f3087b39927df7baf832/1000x1000-000000-80-0-0.jpg",
                "checksum": "c5d11d2a61a9eb7319cffed219ffb290",
                "tracklist": "https://api.deezer.com/playlist/1976454162/tracks",
                "creation_date": "2016-06-29 13:33:48",
                "md5_image": "e1c1a8f25d88f3087b39927df7baf832",
                "picture_type": "playlist",
                "user": {
                    "id": 753546365,
                    "name": "Fábio - Deezer Pop Editor",
                    "tracklist": "https://api.deezer.com/user/753546365/flow",
                    "type": "user"
                },
                "type": "playlist"
            },
            {
                "id": 3325684262,
                "title": "Naija Heat",
                "public": true,
                "nb_tracks": 50,
                "link": "https://www.deezer.com/playlist/3325684262",
                "picture": "https://api.deezer.com/playlist/3325684262/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/playlist/6143af79cb2fb691538e5717f6fd450a/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/playlist/6143af79cb2fb691538e5717f6fd450a/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/playlist/6143af79cb2fb691538e5717f6fd450a/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/playlist/6143af79cb2fb691538e5717f6fd450a/1000x1000-000000-80-0-0.jpg",
                "checksum": "091d52514fc02e9ebde3d5c23e1f2bcc",
                "tracklist": "https://api.deezer.com/playlist/3325684262/tracks",
                "creation_date": "2017-07-04 13:22:23",
                "md5_image": "6143af79cb2fb691538e5717f6fd450a",
                "picture_type": "playlist",
                "user": {
                    "id": 3115990644,
                    "name": "Sot - Deezer Afro Editor",
                    "tracklist": "https://api.deezer.com/user/3115990644/flow",
                    "type": "user"
                },
                "type": "playlist"
            }
        ],
        "total": 10
    },
    "podcasts": {
        "data": [
            {
                "id": 2366872,
                "title": "DJ TOPHAZ MIXES",
                "description": "Welcome to my world. Have a 5ive Star Mixperience! Follow @tophaz254",
                "available": true,
                "link": "https://www.deezer.com/show/2366872",
                "share": "https://www.deezer.com/show/2366872?utm_source=deezer&utm_content=show-2366872&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/e1b47d2b2071d053a8aedd6c3a79415c/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/e1b47d2b2071d053a8aedd6c3a79415c/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/e1b47d2b2071d053a8aedd6c3a79415c/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/e1b47d2b2071d053a8aedd6c3a79415c/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/e1b47d2b2071d053a8aedd6c3a79415c/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 2278232,
                "title": "Amerix",
                "description": "Men's health & Well-ness.| Let's get Better Together.",
                "available": true,
                "link": "https://www.deezer.com/show/2278232",
                "share": "https://www.deezer.com/show/2278232?utm_source=deezer&utm_content=show-2278232&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/fb151d28d3a0e36dc59412ca06e15a4a/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/fb151d28d3a0e36dc59412ca06e15a4a/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/fb151d28d3a0e36dc59412ca06e15a4a/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/fb151d28d3a0e36dc59412ca06e15a4a/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/fb151d28d3a0e36dc59412ca06e15a4a/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 2504592,
                "title": "Mochi Baybee Mixes",
                "description": "Mochi Baybee is a fast rising, female DJ, based in Minnesota, USA. With only 3 years of experience in DJing, she is becoming a household name and already breaking borders in the USA and international music scene. She is known for her wide selection and versatility in music.  Welcome to the #MOCHIVATED experience.",
                "available": true,
                "link": "https://www.deezer.com/show/2504592",
                "share": "https://www.deezer.com/show/2504592?utm_source=deezer&utm_content=show-2504592&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/177df1f05f26d2d1659105a73f36bb19/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/177df1f05f26d2d1659105a73f36bb19/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/177df1f05f26d2d1659105a73f36bb19/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/177df1f05f26d2d1659105a73f36bb19/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/177df1f05f26d2d1659105a73f36bb19/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 2294452,
                "title": "Capital FM",
                "description": "The Official Page for Capital FM Kenya's Podcasters and Mixxmasters.  The lastest mixes from our reputable line of Kenya's Best DJs across all genres and the most educative, entertaining and funniest conversations from our A- Class personalities. Subcribe!",
                "available": true,
                "link": "https://www.deezer.com/show/2294452",
                "share": "https://www.deezer.com/show/2294452?utm_source=deezer&utm_content=show-2294452&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/dc4cba256d47bc9ea618536fab6ec386/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/dc4cba256d47bc9ea618536fab6ec386/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/dc4cba256d47bc9ea618536fab6ec386/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/dc4cba256d47bc9ea618536fab6ec386/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/dc4cba256d47bc9ea618536fab6ec386/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 2504522,
                "title": "HIPHOP, AFROBEATS, DANCEHALL w/ DJ BOAT",
                "description": "Bringing you the 🔥🔥 🔥🔥 Afrobeats, HipHop, Dancehall, R&B, Reggaeton and More Mixes. For bookings contact me on instagram @djboatglobal. Check out my playlists and singles on my Spotify/Apple Music, Audiomack, Souncloud and Youtube page. Search (DJ BOAT). Video versions for all mixes on Youtube.",
                "available": true,
                "link": "https://www.deezer.com/show/2504522",
                "share": "https://www.deezer.com/show/2504522?utm_source=deezer&utm_content=show-2504522&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/1fa842cdfe905edf67b239288bd8bba0/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/1fa842cdfe905edf67b239288bd8bba0/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/1fa842cdfe905edf67b239288bd8bba0/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/1fa842cdfe905edf67b239288bd8bba0/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/1fa842cdfe905edf67b239288bd8bba0/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 2504882,
                "title": "The Sandwich Podcast",
                "description": "Just a bunch of funny creatives speaking out their minds on different matters happening around us.",
                "available": true,
                "link": "https://www.deezer.com/show/2504882",
                "share": "https://www.deezer.com/show/2504882?utm_source=deezer&utm_content=show-2504882&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/cc345d2ad57aff856df07b13a8ff7191/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/cc345d2ad57aff856df07b13a8ff7191/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/cc345d2ad57aff856df07b13a8ff7191/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/cc345d2ad57aff856df07b13a8ff7191/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/cc345d2ad57aff856df07b13a8ff7191/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 679102,
                "title": "Crime Junkie",
                "description": "If you can never get enough true crime... Congratulations, you’ve found your people.",
                "available": true,
                "link": "https://www.deezer.com/show/679102",
                "share": "https://www.deezer.com/show/679102?utm_source=deezer&utm_content=show-679102&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/e69314f6c5c4745a81d4ed8c7adb9926/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/e69314f6c5c4745a81d4ed8c7adb9926/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/e69314f6c5c4745a81d4ed8c7adb9926/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/e69314f6c5c4745a81d4ed8c7adb9926/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/e69314f6c5c4745a81d4ed8c7adb9926/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 2504732,
                "title": "supremacysounds",
                "description": "supremacysounds.com",
                "available": true,
                "link": "https://www.deezer.com/show/2504732",
                "share": "https://www.deezer.com/show/2504732?utm_source=deezer&utm_content=show-2504732&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/ac61cc41535db6c8357f63242f5e8b20/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/ac61cc41535db6c8357f63242f5e8b20/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/ac61cc41535db6c8357f63242f5e8b20/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/ac61cc41535db6c8357f63242f5e8b20/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/ac61cc41535db6c8357f63242f5e8b20/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 1879072,
                "title": "Ado Veli Podcast",
                "description": "Ado Veli Podcast is the number 1 weekly Kenyan music podcast show. It is hosted by Pesh, Michelle Rwenji and Ado Veli.",
                "available": true,
                "link": "https://www.deezer.com/show/1879072",
                "share": "https://www.deezer.com/show/1879072?utm_source=deezer&utm_content=show-1879072&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/79c3cfe88080ba0d736b24a235e5ba0d/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/79c3cfe88080ba0d736b24a235e5ba0d/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/79c3cfe88080ba0d736b24a235e5ba0d/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/79c3cfe88080ba0d736b24a235e5ba0d/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/79c3cfe88080ba0d736b24a235e5ba0d/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            },
            {
                "id": 59898,
                "title": "TED Talks Daily",
                "description": "Every weekday, TED Talks Daily brings you the latest talks in audio. Join host and journalist Elise Hu for thought-provoking ideas on every subject imaginable — from Artificial Intelligence to Zoology, and everything in between — given by the world's leading thinkers and creators. With TED Talks Daily, find some space in your day to change your perspectives, ignite your curiosity, and learn something new.",
                "available": true,
                "link": "https://www.deezer.com/show/59898",
                "share": "https://www.deezer.com/show/59898?utm_source=deezer&utm_content=show-59898&utm_term=0_1637783685&utm_medium=web",
                "picture": "https://e-cdns-images.dzcdn.net/images/talk/b74e1f2cfb3d12bb447c60b31909cfe4/180x180-000000-80-0-0.jpg",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/talk/b74e1f2cfb3d12bb447c60b31909cfe4/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/talk/b74e1f2cfb3d12bb447c60b31909cfe4/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/talk/b74e1f2cfb3d12bb447c60b31909cfe4/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/talk/b74e1f2cfb3d12bb447c60b31909cfe4/1000x1000-000000-80-0-0.jpg",
                "type": "podcast"
            }
        ],
        "total": 10
    }
}

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title: "TV Movie",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};
 