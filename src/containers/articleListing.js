import React from 'react'; 
import ArticleCard from '../components/ArticleCard'
import Data from '../components/data.json'

function ArticleListing(){
    const articleListingsTitle = "Articles"; 

    console.log(Data); 

    return (
        <div className = "pageWrapper"> 
            {/* Must use className instead of class because it is a protect javascript word */}
            <h1 className = "HeaderOneStyle" >{articleListingsTitle}</h1>
            {Data.map((article, key) => (
                <ArticleCard article={article} key={key}/>
            ))} 
            {/* article and key are props that passes data from one parent component to a child component*/}
            {/* must use curly braces for any execution of javascript*/}
        </div>
    )
}

export default ArticleListing