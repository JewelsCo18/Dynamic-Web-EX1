import React from 'react'; 

function ArticleListing(){
    const articleListingsTitle = "Multiple Articles"; 
    return (
        <div className = "pageWrapper"> 
            {/* Must use className instead of class because it is a protect javascript word */}
            <h1 className = "HeaderOneStyle" >{articleListingsTitle}</h1>
        </div>
    )
}

export default ArticleListing