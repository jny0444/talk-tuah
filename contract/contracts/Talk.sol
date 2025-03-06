// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Talk {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    enum PostType {
        Blockchain,
        Shetposting,
        Political
    }

    struct Post {
        bytes32 postId;
        address author;
        string heading;
        string description;
        uint256 timestamp;
        PostType postType;
    }

    struct Comment {
        bytes32 postId;
        bytes32 commentId;
        address author;
        string comment;
        uint256 timestamp;
    }

    mapping(bytes32 => Post) public posts;
    mapping(bytes32 => Comment[]) public postToComments;
    bytes32[] public postIds; // Array to store post IDs for retrieval

    event PostEvent(bytes32 postId, address author, string heading, string description, uint256 timestamp, PostType postType);
    event CommentEvent(bytes32 postId, bytes32 commentId, address author, string comment, uint256 timestamp);

    function createPost(string memory _heading, string memory _description, PostType _postType) public {
        bytes32 pId = keccak256(abi.encode(msg.sender, block.timestamp, _heading, _description));

        posts[pId] = Post(
            pId,
            msg.sender,
            _heading,
            _description,
            block.timestamp,
            _postType
        );

        postIds.push(pId); // Store post ID for retrieval

        emit PostEvent(pId, msg.sender, _heading, _description, block.timestamp, _postType);
    }

    function addComment(bytes32 _postId, string memory _comment) public {
        require(posts[_postId].postId != 0, "Post does not exist");

        bytes32 cId = keccak256(abi.encode(msg.sender, block.timestamp, _comment));

        postToComments[_postId].push(Comment(
            _postId,
            cId,
            msg.sender,
            _comment,
            block.timestamp
        ));

        emit CommentEvent(_postId, cId, msg.sender, _comment, block.timestamp);
    }

    function getAllPosts() public view returns (Post[] memory) {
        Post[] memory allPosts = new Post[](postIds.length);
        for (uint256 i = 0; i < postIds.length; i++) {
            allPosts[i] = posts[postIds[i]];
        }
        return allPosts;
    }

    function getComments(bytes32 _postId) public view returns (Comment[] memory) {
        require(posts[_postId].postId != 0, "Post does not exist");
        return postToComments[_postId];
    }
}
