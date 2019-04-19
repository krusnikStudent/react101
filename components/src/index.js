import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail author="Sam" 
                    timeAgo="Today at 4:55PM" 
                    avatar={faker.image.avatar()} 
                    comments="So rad, dude!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:22AM" 
                    avatar={faker.image.avatar()} 
                    comments="Awesome blog post!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 3:13PM" 
                    avatar={faker.image.avatar()} 
                    comments="When's the next one?" 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));