import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                /*activeClassName='my-active'
                                activeStyle={{
                                    color: 'fa923f',
                                    textDecoration: 'underline'
                                }}*/
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post'  ===> relative path
                                pathname: '/new-post',
                                //below is not needed for this but to show whatelse it can do
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                      {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                        <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                        <Route path="/" exact component={Posts} />
                    {/*dynamically changing the id, since we need to id the post.
                    positioning the id parameter is important, it should be after new-post*/}
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;