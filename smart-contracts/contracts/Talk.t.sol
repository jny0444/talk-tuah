// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Talk {
    uint256 private postIdCounter;

    struct Post {
        uint256 id;
        string content;
        address author;
    }

    mapping(uint256 => Post) public posts;

    event PostCreated(uint256 id, string content, address author);

    constructor() {
        postIdCounter = 0;
    }

    function createPost(string memory content) public {
        postIdCounter++;
        uint256 newPostId = postIdCounter;

        posts[newPostId] = Post({
            id: newPostId,
            content: content,
            author: msg.sender
        });

        emit PostCreated(newPostId, content, msg.sender);
    }
}