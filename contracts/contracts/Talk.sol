// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Talk {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    struct Post {
        bytes32 postId;
        address author;
        string heading;
        string description;
        uint256 timestamp;
        uint256 likes;
        uint256 dislikes;
    }

    struct Comment {
        bytes32 postId;
        bytes32 commentId;
        address author;
        string comment;
        uint256 timestamp;
        uint256 likes;
        uint256 dislikes;
    }

    mapping(bytes32 => Post) public posts;
    mapping(bytes32 => mapping(bytes32 => Comment)) public postToComment;

    event PostEvent(bytes32 postId, address author, string heading, string description, uint256 timestamp, uint256 likes, uint256 dislikes);
    event CommentEvent(bytes32 postId, bytes32 commentId, address author, string comment, uint256 timestamp, uint256 likes, uint256 dislikes);
   
    function createPost(string memory _heading, string memory _description) public {
        bytes32 pId = keccak256(abi.encode(msg.sender, block.timestamp, _heading, _description));
    
        posts[pId] = Post(
            pId,
            msg.sender,
            _heading,
            _description,
            block.timestamp,
            0,
            0
        );

        emit PostEvent(pId, msg.sender, _heading, _description, block.timestamp, 0, 0);
    }

    function addComment(bytes32 _postId, string memory _comment) public {
        bytes32 cId = keccak256(abi.encode(msg.sender, block.timestamp, _comment));

        postToComment[_postId][cId] = Comment(
            _postId,
            cId,
            msg.sender,
            _comment,
            block.timestamp,
            0,
            0
        );

        emit CommentEvent(_postId, cId, msg.sender, _comment, block.timestamp, 0, 0);
    }


    function deletePost(bytes32 _postId) public onlyAuthorDeletePost(_postId) {
        delete posts[_postId];
    }

    function deleteComment(bytes32 _postId, bytes32 _commentId) public onlyAuthorDeleteComment(_postId, _commentId){
        delete postToComment[_postId][_commentId];
    }

    function likePost(bytes32 _postId) public {
        posts[_postId].likes++;
    }

    function dislikePost(bytes32 _postId) public {
        posts[_postId].dislikes++;
    }

    function likeComment(bytes32 _postId, bytes32 _commentId) public {
        postToComment[_postId][_commentId].likes++;
    }

    function dislikeComment(bytes32 _postId, bytes32 _commentId) public {
        postToComment[_postId][_commentId].dislikes++;
    }

    modifier onlyAuthorDeletePost(bytes32 _postId) {
        require(msg.sender == posts[_postId].author, "Only author can delete the post");
        _;
    }

    modifier onlyAuthorDeleteComment(bytes32 _postId, bytes32 _commentId) {
        require(msg.sender == postToComment[_postId][_commentId].author, "Only author can delete the comment");
        _;
    }
}