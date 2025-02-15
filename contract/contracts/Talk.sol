// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

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
    }

    struct Comment {
        bytes32 postId;
        bytes32 commentId;
        address author;
        string comment;
        uint256 timestamp;
    }

    mapping(bytes32 => Post) public posts;
    mapping(bytes32 => mapping(bytes32 => Comment)) public postToComment;

    event PostEvent(bytes32 postId, address author, string heading, string description, uint256 timestamp);
    event CommentEvent(bytes32 postId, bytes32 commentId, address author, string comment, uint256 timestamp);
   
    function createPost(string memory _heading, string memory _description) public {
        bytes32 pId = keccak256(abi.encode(msg.sender, block.timestamp, _heading, _description));
    
        posts[pId] = Post(
            pId,
            msg.sender,
            _heading,
            _description,
            block.timestamp
        );

        emit PostEvent(pId, msg.sender, _heading, _description, block.timestamp);
    }

    function addComment(bytes32 _postId, string memory _comment) public {
        bytes32 cId = keccak256(abi.encode(msg.sender, block.timestamp, _comment));

        postToComment[_postId][cId] = Comment(
            _postId,
            cId,
            msg.sender,
            _comment,
            block.timestamp
        );

        emit CommentEvent(_postId, cId, msg.sender, _comment, block.timestamp);
    }
}
