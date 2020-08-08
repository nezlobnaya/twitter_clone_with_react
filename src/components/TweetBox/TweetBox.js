import React from 'react'
import './TweetBox.css'
import { Button, Avatar } from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/717437568858660864/lmMcNRnO_normal.jpg" />
                    <input placeholder="What's happening?" type="text"/>
                    {/* <input placeholder="Enter image URl" type="text"/> */}
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
