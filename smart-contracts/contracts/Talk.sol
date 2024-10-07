//SPDC-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Talk {

    struct Post {
        uint postId;
        address author;
        string heading;
        string description;
        uint256 timestamp;
        uint256 likes;
        uint256 dislikes;
    }

    struct Comment {
        uint commentId;
        address author;
        string comment;
        uint256 timestamp;
        uint256 likes;
        uint256 dislikes;
    }
    
}