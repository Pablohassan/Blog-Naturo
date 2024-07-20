import React from 'react';
import { useParams } from 'react-router-dom';
import laureforetdos from "../../public/assets/blog/sortie-nature/laure_foret_dos.jpg"
import laureecrit from "../../public/assets/blog/sortie-nature/laureecritdesfiches.jpg"

const articles = [
  {
    id: 1,
    title: "Exploration des secrets de la forêt",
    content: `A journey through the lush forests and the beauty they hold. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: laureforetdos,
    image2: laureecrit
  },
  {
    id: 2,
    title: "The Wonders of the Ocean",
    content: `Diving into the mysteries and wonders of the deep blue sea. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Mountain Adventures",
    content: `Conquering the peaks and experiencing the thrill of the mountains. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "https://via.placeholder.com/600x400",
  },
];

const ArticlesBlog: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(a => a.id === Number(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-full h-128 object-cover mb-4"/>
      <p className="text-gray-700">{article.content}</p>
      <img src={article.image2} alt={article.title} className="w-full h-128 object-cover mb-4"/>
    </div>
  );
};

export default ArticlesBlog;
