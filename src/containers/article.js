import React, {useEffect, useState}  from 'react'; 
import {useParams} from "react-router-dom"; 
import Data from '../components/data.json'; 

function Article(){
    const [article, setArticle ] = useState({}); 

    let {id} = useParams(); 

    useEffect(() => {
        //runs code any time anything changes within the array it will perform the function 
        //two parameters: function and array
        const dataToSet = Data.find((item) => item.id === id);
        //setting dataToSet to be equal to whatever is within the article when the article id = the id found in data.json
        setArticle(dataToSet); 
    }, [id]); 

    const newDate = new Date(article.publishedDate); //type Date
    const dateString = newDate.toDateString(); 

    return (
        <main> 
            <section className ="articleHeader" style = {{
                backgroundImage: `url('${article.image && article.image.url}')`, 
                backgroundPosition: "center", 
                backgroundSize: "cover",}}>

                <div className = "articleHeaderText"> 
                    <h1 className = "HeaderOneStyle" style = {{marginBottom: "5px", marginTop: "25px"}}> {article.title} </h1>
                    <p className = "articleCardDate" style = {{marginLeft: "0px" }}> {dateString}</p>
                    <p className = "articleHeaderBlurb"> {article.blurb}</p>
                </div>
            </section>
            
            <section className = "articleText">
                {article.articleText && 
                    article.articleText.map((text, i) => {
                        const type = text.type; 
                        switch (type ) {
                            case 'p': 
                                return <p key = {i}>{text.data}</p>
                            case 'h2': 
                                return <h2 key = {i}>{text.data}</h2>
                            case 'h3':
                                return <h3 key = {i}>{text.data}</h3>
                            default: 
                                return <p key = {i}>{text.data}</p>
                        }

                    })}
            </section>
        </main>
    )
}

export default Article