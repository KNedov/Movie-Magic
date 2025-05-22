const movies = [{
    id: "a3682672-0ee401284-8759-35ee253329zv",
    title: "Jungle Cruise",
    genre: "Action",
    description:
        "Dr. Lily Houghton enlists Frank Wolff to guide her down the Amazon in search of an ancient tree that holds the power to heal.",
        imageUrl: "/img/jungle-cruise.jpeg",
    director: "Jaume Collet-Serra",
    year: 2021,
    rating: 7.2,
    category: "Action",
},
    {
        id: "a3682672-0ee401284-8759-35ee253329zv",
        title: "Inception",
        genre: "Sci-Fi",
        description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        director: "Christopher Nolan",
        year: 2010,
        imageUrl: "https://th.bing.com/th/id/OIP.KvWY-Lps3p8FLMjUcFTK3wHaKz?w=126&h=184&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7",
        rating: 8.8,
        category: "Action",
        
    },
    {
        id: "b3682672-0ee401284-8759-35ee253329zv",
        title: "Interstellar",
        genre: "Sci-Fi",
        description:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        year: 2014,
        imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/interstellar-imax-poster.jpg",
        rating: 8.6,
        category: "Action",
    },
    {
        id: "c3682672-0ee401284-8759-35ee253329zv",
        title: "The Dark Knight",
        genre: "Action",
        description:
            "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        director: "Christopher Nolan",
        year: 2008,
        imageUrl: "https://th.bing.com/th/id/R.8a7f9af240e2349f754538d2d1018375?rik=dbxlDZ%2bZpmKJnA&pid=ImgRaw&r=0",
        rating: 9.0,
        category: "Action",
    },
    {
        id: "d3682672-0ee401284-8759-35ee253329zv",
        title: "The Matrix",
        genre: "Sci-Fi",
        description:
            "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        director: "Lana Wachowski, Lilly Wachowski",
        year: 1999,
        imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/the-matrix-resurrections-poster.jpg",
        rating: 8.7,
        category: "Action"
    },
    {
        id: "e3682672-0ee401284-8759-35ee253329zv",
        title: "The Shawshank Redemption",
        genre: "Drama",
        description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        year: 1994,
        imageUrl: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        rating: 9.3,
        category: "Drama"
    },
    {
        id: "f3682672-0ee401284-8759-35ee253329zv",
        title: "Pulp Fiction",
        genre: "Crime",
        description:
            "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        year: 1994,
        imageUrl: "https://picfiles.alphacoders.com/371/371109.jpg",
        rating: 8.9,
        category: "Crime"
    },
];
export default {    
    getAll() {
        return movies;
    }
}
