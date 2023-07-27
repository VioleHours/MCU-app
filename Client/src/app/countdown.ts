export interface Countdown {
    days_until: number,
    following_production: {
        days_until: number,
        overview: string,
        poster_url: string,
        release_date: string,
        title: string,
        type: string,
    } [],
    overview: string,
    poster_url: string,
    release_date: string,
    title: string,
    type: string
}