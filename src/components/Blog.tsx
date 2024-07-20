import React from 'react';
import { useNavigate } from 'react-router-dom';
import laureforetdos from "../../public/assets/blog/sortie-nature/laure_foret_dos.jpg"

const articles = [
  {
    id: 1,
    title: "Exploration des secrets de la forêt",
    description: "A journey through the lush forests and the beauty they hold.",
    content: `A journey through the lush forests and the beauty they hold. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: laureforetdos,
  },
  {
    id: 2,
    title: "The Wonders of the Ocean",
    description: "Diving into the mysteries and wonders of the deep blue sea.",
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
    description: "Conquering the peaks and experiencing the thrill of the mountains.",
    content: `Conquering the peaks and experiencing the thrill of the mountains. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "https://via.placeholder.com/600x400",
  },
];

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Nature Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
            onClick={() => navigate(`/articles/${article.id}`)}
          >
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700 flex-grow">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;


