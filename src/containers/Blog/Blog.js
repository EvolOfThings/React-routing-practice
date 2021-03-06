import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth:true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                /*activeClassName='my-active'
                                activeStyle={{
                                    color: 'fa923f',
                                    textDecoration: 'underline'
                                }}*/
                                >Posts</NavLink></li>
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

                    {/*dynamically changing the id, since we need to id the post.
                    positioning the id parameter is important, it should be after new-post*/}
                        {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                        <Route path="/posts" component={Posts} />
                        <Route render={() => <h1>Not Found!</h1>} />
                        {/* unknown route are caught by Redirect bcuz it also catches all
                            the root route so it won't work together unless root route is different */}
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* Does same job as Redirect component */}
                        {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;