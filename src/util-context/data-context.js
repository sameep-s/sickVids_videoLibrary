import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from 'uuid';

const deafultPlaylist = [
    {
        _playlistName: "playlist1",
        playlistVideos: [
            {
                _id: uuid(),
                title: "How To Get Into Harvard (from India)",
                thumbnail: "https://i.ytimg.com/vi/CuYSxik-kUs/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/CuYSxik-kUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "education",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: "I went to high school in Mumbai, and was the only one from India accepted to Harvard early admission my year! Here are a few tips and tricks for preparing your application and applying to Harvard internationally. Feel free to leave any questions in the comments below! 💜💗",
                channelName: "Avanti Nagral",
            },

            {
                _id: uuid(),
                title: "Sadhguru On What's Wrong With Today's Education System | Mystics Of India",
                thumbnail: "https://i.ytimg.com/vi/SSTfPHBCVgo/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/SSTfPHBCVgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "education",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: `* Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, commenting, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.`,
                channelName: "Mystics OF India",
            },

            {
                _id: uuid(),
                title: "Indian Education System Ka DARK Truth - FAILURE? - Ranveer Allahbadia ",
                thumbnail: "https://i.ytimg.com/vi/7uLdaQPekmI/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/7uLdaQPekmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "education",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: `TRS Clips हिंदी आपके Favourite The Ranveer Show हिंदी Podcast के Short Clips का एक बेहतरीन Collection है। आप सबके Love & Support से Ranveer Allahbadia द्वारा The Ranveer Show हिंदी पूरे India के सभी Audio Platforms पर Biggest हिंदी Podcast बन चुका है। BeerBiceps की Team आशा करती है कि हमारे द्वारा बनाए इन ज्ञान से भरे Videos को आप ज़रूर Enjoy करेंगे।`,
                channelName: "TRS Clips हिंदी",
            },

            {
                _id: uuid(),
                title: "World's Craziest Adventure Park! (Inside a Jungle)",
                thumbnail: "https://i.ytimg.com/vi/cSLQ2fHR5Gg/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/cSLQ2fHR5Gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "adventure",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: "We visit the central America region for the first time. In the country of Mexico, we visit Cancun. In her lies the craziest adventure park in the whole world! A mix of jungle rivers, ziplines and underground caves",
                channelName: "Dhruv Rathee Vlogs",
            },

            {
                _id: uuid(),
                title: "Exploring World's Largest Abandoned Theme Park - Wonderland Eurasia",
                thumbnail: "https://i.ytimg.com/vi/wpst0Dbbk7U/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/wpst0Dbbk7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "adventure",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: `In today's episode, we're exploring Wonderland Eurasia, also known as Ankapark.
            Opened in March 2019, the park has 17 rollercoasters, the second-most worldwide. However, the extent of the problems affecting the park became apparent very quickly. Two days after the park opened, a train got stuck on top of a roller coaster, and the passengers were forced to leave the merry-go-round on foot.`,
                channelName: "Explomo",
            },
        ]
    },

    {
        _playlistName: "playlist2",
        playlistVideos: [
            {
                _id: uuid(),
                title: "How To Get Into Harvard (from India)",
                thumbnail: "https://i.ytimg.com/vi/CuYSxik-kUs/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/CuYSxik-kUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "education",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: "I went to high school in Mumbai, and was the only one from India accepted to Harvard early admission my year! Here are a few tips and tricks for preparing your application and applying to Harvard internationally. Feel free to leave any questions in the comments below! 💜💗",
                channelName: "Avanti Nagral",
            },

            {
                _id: uuid(),
                title: "Sadhguru On What's Wrong With Today's Education System | Mystics Of India",
                thumbnail: "https://i.ytimg.com/vi/SSTfPHBCVgo/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/SSTfPHBCVgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "education",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: `* Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, commenting, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.`,
                channelName: "Mystics OF India",
            },

            {
                _id: uuid(),
                title: "Indian Education System Ka DARK Truth - FAILURE? - Ranveer Allahbadia ",
                thumbnail: "https://i.ytimg.com/vi/7uLdaQPekmI/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/7uLdaQPekmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "education",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: `TRS Clips हिंदी आपके Favourite The Ranveer Show हिंदी Podcast के Short Clips का एक बेहतरीन Collection है। आप सबके Love & Support से Ranveer Allahbadia द्वारा The Ranveer Show हिंदी पूरे India के सभी Audio Platforms पर Biggest हिंदी Podcast बन चुका है। BeerBiceps की Team आशा करती है कि हमारे द्वारा बनाए इन ज्ञान से भरे Videos को आप ज़रूर Enjoy करेंगे।`,
                channelName: "TRS Clips हिंदी",
            },

            {
                _id: uuid(),
                title: "World's Craziest Adventure Park! (Inside a Jungle)",
                thumbnail: "https://i.ytimg.com/vi/cSLQ2fHR5Gg/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/cSLQ2fHR5Gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "adventure",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: "We visit the central America region for the first time. In the country of Mexico, we visit Cancun. In her lies the craziest adventure park in the whole world! A mix of jungle rivers, ziplines and underground caves",
                channelName: "Dhruv Rathee Vlogs",
            },

            {
                _id: uuid(),
                title: "Exploring World's Largest Abandoned Theme Park - Wonderland Eurasia",
                thumbnail: "https://i.ytimg.com/vi/wpst0Dbbk7U/maxresdefault.jpg",
                iframe: `<iframe width="100%" src="https://www.youtube.com/embed/wpst0Dbbk7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>`,
                category: "adventure",
                likes: 666,
                views: 20,
                liked: null,
                disliked: null,
                comments: [],
                description: `In today's episode, we're exploring Wonderland Eurasia, also known as Ankapark.
            Opened in March 2019, the park has 17 rollercoasters, the second-most worldwide. However, the extent of the problems affecting the park became apparent very quickly. Two days after the park opened, a train got stuck on top of a roller coaster, and the passengers were forced to leave the merry-go-round on foot.`,
                channelName: "Explomo",
            },
        ]
    }
]

const defaultDataContextVal = [{ items: "none" }];

const DataContext = createContext(defaultDataContextVal);

const DataProvider = ({ children }) => {

    function DataReducer(state_data, action) {

        switch (action.type) {
            case "DEFAULT":
                return state_data;
        }
    }

    const [state_data, dispatch_data] = useReducer(DataReducer, {
        videos: [],
        liked: [],
        history: [],
        watchLater: [],
        playlists: deafultPlaylist
    })



    return (
        <DataContext.Provider value={{ state_data, dispatch_data }}>
            {children}
        </DataContext.Provider>
    );

}

const useData = () => useContext(DataContext);

export { useData, DataProvider };