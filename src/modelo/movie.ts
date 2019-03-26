export class Movie {
    constructor (public vote_count:number,
                public id:number,
                public video:boolean,
                public vote_average:number,
                public title: string,
                public popularity: number,
                public poster_path: string,
                public backdrop_path: string,
                public adult: boolean,
                public overview: string,
                public release_date: string){
    }

    /*
{"vote_count":16764,
"id":19995,
"video":false,
"vote_average":7.4,
"title":"Avatar",
"popularity":23.072,
"poster_path":"\/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
"original_language":"en",
"original_title":"Avatar",
"genre_ids":[28,12,14,878],
"backdrop_path":"\/aHcth2AXzZSjhX7JYh7ie73YVNc.jpg",
"adult":false,
"overview":"In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
"release_date":"2009-12-10"}    
    */
}