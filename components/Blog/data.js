const data = [
    {
      id: 1,
      title: '7 CSS tools you should be using ',
      category: 'development',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 2,
      title: 'Milan Places That Highlight The City',
      category: 'travel',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      title: 'Online Shopping – An Alternative to Shopping in the Mall',
      category: 'shopping',
      subCategory: ['e-commerce store', 'clothing', 'shopping store'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      title: 'ADVENTURE IN YOU',
      category: 'adventure',
      subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      title: 'Loaded BBQ Baked Potatoes',
      category: 'cooking',
      subCategory: ['bbq', 'food', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      title: 'Beyond the Beach',
      category: 'travel',
      subCategory: ['beaches', 'sea', 'holidays'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 7,
      title: 'Art & Perception',
      category: 'art',
      subCategory: ['skill', 'design', 'passion'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
  ];

export default data