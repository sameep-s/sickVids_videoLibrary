import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Education",
    image: "https://res.cloudinary.com/sameep1/image/upload/v1648904767/project_videoLibrary/category_EDUCATION_x8oqv5.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    image: "https://res.cloudinary.com/sameep1/image/upload/v1648904767/project_videoLibrary/category_ADVENTURE_oowqir.jpg"
  },

  {
    _id: uuid(),
    categoryName: "Vlogs",
    image: "https://res.cloudinary.com/sameep1/image/upload/v1648904767/project_videoLibrary/category_VLOGS_steuy5.jpg"
  },

  {
    _id: uuid(),
    categoryName: "Music",
    image: "https://res.cloudinary.com/sameep1/image/upload/v1648904767/project_videoLibrary/category_MUSIC_v3o9vl.jpg"
  },

  {
    _id: uuid(),
    categoryName: "Chill",
    image: "https://res.cloudinary.com/sameep1/image/upload/v1648904767/project_videoLibrary/category_CHILL_d6kuun.jpg"
  },

  {
    _id: uuid(),
    categoryName: "Docuseries",
    image: "https://res.cloudinary.com/sameep1/image/upload/v1648904767/project_videoLibrary/category_DOCUSERIES_umnala.jpg"
  }

];
