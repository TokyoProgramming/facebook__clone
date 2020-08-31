import React from "react";
import './StoryReel.css'
import Story from "./Story";

function StoryReel(){
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://avatars1.githubusercontent.com/u/66249668?s=460&u=2acbbfd5a68ddea4d6f64d232b6490576e461e99&v=4"
                title="yusuke"
            />
            <Story
                image="https://images.unsplash.com/photo-1598550305982-95580582bbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://avatars1.githubusercontent.com/u/810438?s=460&u=35ccd184f97ba62d6332c91d39168cae69602322&v=4"
                title="Dan"
            />
            <Story
                image="https://images.unsplash.com/photo-1598541764892-c89e207d8914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://avatars2.githubusercontent.com/u/6764957?s=460&u=97ad815028595b73b06ee4b0510e66bbe391228d&v=4"
                title="sw"
            />
        </div>
    )
}

export default StoryReel;
