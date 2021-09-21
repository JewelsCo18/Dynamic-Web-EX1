import React, {useEffect, useState}  from 'react'; 
import {useParams} from "react-router-dom"; 
import Data from '../components/data.json'; 

function Article(){
    const [article, setArticle ] = useState({}); 

    let {id} = useParams(); 

    useEffect(() => {
        //runs code any time anything changes within the array it will perform the function 
        //two parameters: function and array
        const dataToSet = Data.find((article) => article.id === id);
        //setting dataToSet to be equal to whatever is within the article when the article id = the id found in data.json
        setArticle(dataToSet); 
    }, [id]); 

    return (
        <main> 
            <section className ="articleHeader">
                <div className = "articleHeaderText"> 
                    <h1 className = "HeaderOneStyle" id = "singleArticleTitle"> {article.title} </h1>
                    <p className = "articleCardDate" id = "singleArticleDate"> {article.publishedDate}</p>
                    <p className = "articleHeaderBlurb"> {article.blurb}</p>
                </div>
            </section>
            
            <section className = "articleText">
                {article.articleText && 
                article.articleText.map((text, i) => {
                    return <p key = {i}> {text.data} </p>; 
                })}
            </section>
        </main>
    )
}

export default Article