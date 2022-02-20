import React from 'react';
import Article from './Article';


const Articles = ({articlesAll}) => {
  return (
    <>
        {articlesAll.map((item) => (
            <Article
            key={item.id}
            titleArticle={item.title}
            namePerson={item.author}
            cardPicture={item.imageUrl}
            personPicture={item.authorImageUrl}
            dateSet={item.createdTime}
            descriptionContent={item.description}
            />
        ))}
        
    </>
  )
}

export default Articles;