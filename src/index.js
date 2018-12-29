import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {

    return (
        <div className = "ui container comments">
            <CommentDetail 
                author = "Sam" 
                timeAgo = "Today at 4:45pm"
                comment = "Nice blog post"
                source = {faker.image.avatar()}/>
            < CommentDetail
                author = "Alex" 
                timeAgo = "Today at 5:15pm" 
                comment = "Good Job" 
                source = {faker.image.avatar()}/>
            < CommentDetail
                author = "Jane" 
                timeAgo = "Today at 6:45pm" 
                comment = "Gotcha"
                source = {faker.image.avatar()} />
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector("#root"));