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
        children: ["5", "6"]
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
        hasItems: false,
        children: ["11", "12", "13"]
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

const Subcats = [
    {
        id: "5",
        title: "sub title 5",
    },
    {
        id: "6",
        title: "sub title 6",
    },
    {
        id: "11",
        title: "sub title 11",
    },
    {
        id: "12",
        title: "sub title 12",
    },
    {
        id: "13",
        title: "sub title 13",
    }
];

const Articles = [
    {
        id: "14",
        parent: "1",
        title: "Article 14 from cat #1",
        content: "fasd asdf sdf asdf asdf sdf asdf asd"
    },
    {
        id: "15",
        parent: "2",
        title: "Article 15 from cat #2",
    },
    {
        id: "16",
        parent: "1",
        title: "Article 16 from cat #1",
    },
    {
        id: "17",
        parent: "3",
        title: "Article 17 from cat #3",
    },
    {
        id: "18",
        parent: "5",
        title: "Article 18 from cat #5",
    }
];

export {Cats, Subcats, Articles};