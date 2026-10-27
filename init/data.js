const sampleListings = [
  {
    title: "Sunset Villa by the Arabian Sea",
    description:
      "Wake up to breathtaking sea views in this elegant coastal villa featuring spacious rooms, a private terrace, and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4200,
    location: "Candolim, Goa",
    country: "India",
  },

  {
    title: "Luxury Apartment in South Mumbai",
    description:
      "Enjoy modern city living in this stylish apartment with contemporary interiors, comfortable bedrooms, and stunning views of Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6500,
    location: "Colaba, Mumbai",
    country: "India",
  },

  {
    title: "Peaceful Mountain Retreat",
    description:
      "Escape into nature with this cozy mountain home surrounded by pine trees, fresh air, and beautiful Himalayan views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3200,
    location: "Manali, Himachal Pradesh",
    country: "India",
  },

  {
    title: "Royal Heritage Haveli",
    description:
      "Experience traditional Indian architecture in this beautifully restored haveli featuring spacious courtyards, elegant rooms, and royal decor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4800,
    location: "Jaipur, Rajasthan",
    country: "India",
  },

  {
    title: "Modern Lakeview Cottage",
    description:
      "Relax beside the tranquil lake in this charming cottage offering cozy interiors, panoramic water views, and a peaceful atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3500,
    location: "Nainital, Uttarakhand",
    country: "India",
  },

  {
    title: "Beachfront Paradise",
    description:
      "Stay just steps away from the ocean in this bright beachfront home with comfortable living spaces and a relaxing outdoor area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    price: 5500,
    location: "Varkala, Kerala",
    country: "India",
  },

  {
    title: "Cozy Forest Cabin",
    description:
      "Spend a peaceful getaway surrounded by lush forests in this warm wooden cabin with a fireplace and scenic outdoor views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80",
    },
    price: 2800,
    location: "Shimla, Himachal Pradesh",
    country: "India",
  },

  {
    title: "Elegant Palace Stay",
    description:
      "Discover timeless luxury in this palace-inspired residence featuring grand interiors, traditional artwork, and premium amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    },
    price: 7200,
    location: "Udaipur, Rajasthan",
    country: "India",
  },

  {
    title: "Riverside Retreat",
    description:
      "Unwind beside the river in this serene retreat surrounded by greenery, offering comfortable rooms and beautiful natural scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3000,
    location: "Rishikesh, Uttarakhand",
    country: "India",
  },

  {
    title: "Charming Houseboat Stay",
    description:
      "Experience Kerala from the water aboard a beautifully designed houseboat with cozy bedrooms, traditional interiors, and peaceful views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6000,
    location: "Alappuzha, Kerala",
    country: "India",
  },

  {
    title: "Contemporary City Loft",
    description:
      "Stay in a stylish urban loft featuring open-plan living, modern furniture, large windows, and convenient access to the city center.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3900,
    location: "Bengaluru, Karnataka",
    country: "India",
  },

  {
    title: "Tea Garden Cottage",
    description:
      "Enjoy a relaxing stay among lush tea gardens in this charming cottage offering peaceful surroundings and comfortable interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    price: 2700,
    location: "Munnar, Kerala",
    country: "India",
  },

  {
    title: "Luxury Desert Camp",
    description:
      "Experience the magic of the desert from a comfortable luxury camp featuring stylish tents, traditional decor, and unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4500,
    location: "Jaisalmer, Rajasthan",
    country: "India",
  },

  {
    title: "Colonial Villa in the Hills",
    description:
      "Relax in this elegant colonial-style villa surrounded by greenery, offering spacious rooms, vintage charm, and cool mountain weather.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3600,
    location: "Mussoorie, Uttarakhand",
    country: "India",
  },

  {
    title: "Private Pool Villa",
    description:
      "Enjoy complete privacy in this luxurious villa featuring a private swimming pool, spacious bedrooms, a modern kitchen, and outdoor seating.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    },
    price: 8500,
    location: "Anjuna, Goa",
    country: "India",
  },

  {
    title: "Lakefront Luxury Home",
    description:
      "Wake up to peaceful lake views from this beautifully furnished home with large windows, modern amenities, and a relaxing balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4100,
    location: "Srinagar, Jammu and Kashmir",
    country: "India",
  },

  {
    title: "Old City Heritage Home",
    description:
      "Stay in the heart of the historic city in this traditional home combining classic architecture with modern comforts and warm interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    },
    price: 2500,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
  },

  {
    title: "Tropical Garden Villa",
    description:
      "Surrounded by tropical plants and palm trees, this peaceful villa offers spacious rooms, outdoor seating, and a relaxing holiday atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80",
    },
    price: 5000,
    location: "Panjim, Goa",
    country: "India",
  },

  {
    title: "Minimalist Apartment",
    description:
      "A bright and comfortable minimalist apartment with modern furnishings, a fully equipped kitchen, and easy access to nearby attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3100,
    location: "Pune, Maharashtra",
    country: "India",
  },

  {
    title: "Himalayan Wooden Chalet",
    description:
      "Enjoy cozy mountain living in this beautiful wooden chalet featuring panoramic Himalayan views, warm interiors, and a peaceful setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4400,
    location: "Kasol, Himachal Pradesh",
    country: "India",
  },
];




export default sampleListings;