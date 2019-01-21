import React, {Component} from 'react'
import articles from '../fixtures'
import { Link } from "react-router-dom";


class OneArticle extends Component{

    render(){

        const prodId = this.props.match.params.id;
        
        let article;
        
        for(var i=0; i<articles.length; i++){
            if(articles[i].id===prodId){
                article = articles[i];
                break;
            }
        }

       

        if(prodId===undefined)
            return <h2>Товар не найден</h2>;
        else
            return (
                <div className="card mx-auto" style={{width:'80%'}}>
                    <div className="card-header">
                        <h2> {article.title}</h2>
                    </div>

                    <div className="card-body">{article.text}</div>
                    <p className="card-body">{article.date}</p>

                    <Link to={'/'}>Home</Link>
                </div>

            );
    }
}


export  default OneArticle