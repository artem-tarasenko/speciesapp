const Cats = [
    {
        id: "1",
        title: "title 1 with items",
        hasArticle: false,
        hasSubcategories: false,
        hasItems: true,
    },
        {
        id: "2",
        title: "title 2 with descr",
        hasArticle: true,
        hasSubcategories: false,
        hasItems: false,
    },
        {
        id: "3",
        title: "title 3 with items",
        hasArticle: false,
        hasSubcategories: false,
        hasItems: true,
    },
    {
        id: "4",
        title: "title 4 with subcats",
        hasArticle: false,
        hasSubcategories: true,
        hasItems: false,
    },
    {
        id: "7",
        title: "title 7 with items",
        hasArticle: false,
        hasSubcategories: false,
        hasItems: true,
    },
        {
        id: "8",
        title: "title 8 with subcats",
        hasArticle: false,
        hasSubcategories: true,
        hasItems: false
    },
        {
        id: "9",
        title: "title 9 with items",
        hasArticle: false,
        hasSubcategories: false,
        hasItems: true,
    },
    {
        id: "10",
        title: "title 10 with items",
        hasArticle: false,
        hasSubcategories: false,
        hasItems: true,
    }
];

const SubcatsDB = [
    {
        id: "5",
        title: "sub title 5",
        parent: "4"
    },
    {
        id: "6",
        title: "sub title 6",
        parent: "4"
    },
    {
        id: "11",
        title: "sub title 11",
        parent: "8"
    },
    {
        id: "12",
        title: "sub title 12",
        parent: "8"
    },
    {
        id: "13",
        title: "sub title 13",
        parent: "8"
    }
];

const ArticlesDB = [
    {
        id: "14",
        parent: "1",
        title: "Article 14 from cat #1",
        subtitle: "This is a testing subtitle.",
        content: "fasd asdf sdf asdf asdf sdf asdf asd"
    },
    {
        id: "15",
        parent: "2",
        title: "Article 15 from cat #2",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "16",
        parent: "1",
        title: "Article 16 from cat #1",
        subtitle: "This is a testing subtitle.",
        content: "fasd asdf sdf asdf asdf sdf asdf asd"
    },
    {
        id: "17",
        parent: "3",
        title: "Article 17 from cat #3",
        subtitle: "This is a testing subtitle.",
        content: "fasd asdf sdf asdf asdf sdf asdf asd"
    },
    {
        id: "18",
        parent: "5",
        title: "Article 18 from cat #5",
        subtitle: "This is a testing subtitle.",
        content: "fasd asdf sdf asdf asdf sdf asdf asd"
    }
];

export {Cats, SubcatsDB, ArticlesDB};