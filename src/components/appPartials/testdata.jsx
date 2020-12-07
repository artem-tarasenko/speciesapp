const CategoriesDB = [
  { id: "0", title: "Дальневосточные моря", subcategories: [1, 2, 3] },
  { id: 1, title: "L1 Phylum: Chordata with SUBCATS", subcategories: [4, 5, 6, 8, 9, 10] },
  { id: 2, title: "L1 Clade: Synapsida with ARTICLES", articles: ["a1", "a2"] },
  { id: 3, title: "L1 Class: Mammailia with DESCRIPTION", description: ["a5"]},
  { id: 4, title: "L2 Order: Carnivora", articles: ["a1", "a2"]  },
  { id: 5, title: "L2 Subfamily: Felinae", articles: ["a1", "a2", "a3", "a4"] },
  { id: 6, title: "L2 Genus: Felis", articles: ["a5", "a6", "a7"] },
  { id: 7, title: "L2 Species: Felis catus", articles: ["a6"] },
  { id: 8, title: "L2 Order: Carnivora", articles: ["a1", "a5", "a7"] },
  { id: 9, title: "L2 Subfamily: Felinae", articles: ["a2", "a4", "a6"] },
  { id: 10, title: "L2 Genus: Felis", articles: ["a1", "a5", "a7"] },
];

const ArticlesDB = [
    {
		id: "a1",
		parent: 1,
		ancestor: ["1", "s1"],
        title: "Article 14 from cat #1",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
		id: "a2",
		parent: 2,
		ancestor: ["2", "s2"],
        title: "Article 15 from cat #2",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {id: "a3", parent: 1, ancestor: ["1", "s1"],
        title: "Article 16 from cat #1",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {id: "a4", parent: 3, ancestor: ["3", "s3"],
        title: "Article 17 from cat #3",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {id: "a5", parent: 5, ancestor: ["4", "5"],
        title: "Article 18 from subcat #5",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {id: "a6", parent: 5, ancestor: ["4", "5"],
        title: "Article 19 from subcat #5",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {id: "a7", parent: 5, ancestor: ["4", "5"],
        title: "Article 20 from subcat #5",
        subtitle: "This is a testing subtitle.",
        content: "This is the article with a description of category. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

export {CategoriesDB, ArticlesDB};
