import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Feed</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <a href="/dashboard">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="ti-user"></i></div> 3 new blogs in your feed<span className="ml-auto font-12 text-muted">Just Now</span>
                        </li>
                        </a>
                        <a href="/melbourne">
                        <li className="feed-item" >
                            <div className="feed-icon bg-success" ><i className="far fa-bell"></i></div> Melbourne is getting tons of love<span className="ml-auto font-12 text-muted">2 Hours ago</span>
                        </li>
                        </a>
                        <a href="/melbourne">
                        <li className="feed-item">
                            <div className="feed-icon bg-warning"><i className="far fa-bell"></i></div> Your London blog has been uploaded <span className="ml-auto font-12 text-muted">October 6</span>
                        </li>
                        </a>
                        <a href="/profile">
                        <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> 6 new followers<span className="ml-auto font-12 text-muted">October 1</span>
                        </li>
                        </a>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
