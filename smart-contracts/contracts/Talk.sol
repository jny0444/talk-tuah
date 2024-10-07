//SPDC-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Talk {

    uint256 private pId;

    struct Post {
        uint postId;
        uint commentId;
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

    mapping(uint => Post) public posts;
    mapping(uint => mapping(uint => Comment)) public postToComment;

    event CreatePost(uint postId, address author, string heading, string description, uint256 timestamp, uint256 likes, uint256 dislikes);
    event CommentAdded(uint postId, uint commentId, address author, string comment, uint256 timestamp, uint256 likes, uint256 dislikes);
    
    function createPost(string memory _heading, string memory _description) public {
        posts[pId] = Post(
            pId,
            0,
            msg.sender,
            _heading,
            _description,
            block.timestamp,
            0,
            0
        );
        pId++;

        emit CreatePost(pId, msg.sender, _heading, _description, block.timestamp, 0, 0);
    }

    function addComment(uint _postId, string memory _comment) public {
        postToComment[_postId][posts[_postId].commentId] = Comment(
            posts[_postId].commentId,
            msg.sender,
            _comment,
            block.timestamp,
            0,
            0
        );
        posts[_postId].commentId++;

        emit CommentAdded(_postId, posts[_postId].commentId, msg.sender, _comment, block.timestamp, 0, 0);
    }

    function deletePost(uint _postId) public onlyAuthorDeletePost(_postId) {
        delete posts[_postId];
    }

    function deleteComment(uint _postId, uint _commentId) public onlyAuthorDeleteComment(_postId, _commentId){
        delete postToComment[_postId][_commentId];
    }

    function likePost(uint _postId) public {
        posts[_postId].likes++;
    }

    function dislikePost(uint _postId) public {
        posts[_postId].dislikes++;
    }

    modifier onlyAuthorDeletePost(uint _postId) {
        require(msg.sender == posts[_postId].author, "Only author can delete the post");
        _;
    }

    modifier onlyAuthorDeleteComment(uint _postId, uint _commentId) {
        require(msg.sender == postToComment[_postId][_commentId].author, "Only author can delete the comment");
        _;
    }
}