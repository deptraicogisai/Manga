export const Section = {
    LATEST: 'Lastest Update',
    POPULAR: 'Popular Manga',
    ADVENTURE: 'Adventure Manga',
    ROMANCE: 'Romance Manga',
    VIEWS: 'Views',
    LATEST_CATEGORY: 'Latest',
    AZ: 'A-Z',
    COMPLETED: 'Completed',
    RECOMMEND: 'Recommended',
    NEWEST: 'Newest'
}

export const Category = {
    LATEST: 1,
    POPULAR: 2,
    AZ: 3,
    COMPLETED: 4,
    RECOMMEND: 5,
    NEWEST: 6
}

export const Section_Directory = [
    {
        name: Section.VIEWS,
        type: Category.POPULAR
    },
    {
        name: Section.LATEST_CATEGORY,
        type: Category.LATEST
    }
    ,
    {
        name: Section.AZ,
        type: Category.AZ
    },
    {
        name: Section.COMPLETED,
        type: Category.COMPLETED
    }
];

export const Section_Original = [{
    name: Section.RECOMMEND,
    type: Category.RECOMMEND
}, {
    name: Section.NEWEST,
    type: Category.NEWEST
}]

export const URL = {
    LATEST: '/latestmanga',
    POPULAR: '/popularmanga',
    POPULAR_ADVENTURE: '/popularmanga/adventure',
    POPULAR_ROMANCE: '/popularmanga/romance',
    DIRECTORY: '/mangadirectory',
    Original: '/comicstory',
    SEARCH_BOOK: '/story/search'
}

export const SOCIAL = {
    APP_ID: '1283005528398181'
}