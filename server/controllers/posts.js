// import PostImg from '../modules/postImg.js';

// export const getPosts = (req, res) => {
//     try {
//         const postImgs = await PostImg.find();
        
//         res.status(200).json(postImgs);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
        
//     }
// }

// export const createPosts = (req, res) => {
//     res.send('Post Create');
// }

import PostMsg from "../modules/postMsg.js";

export const getPosts = async (req, res) => {
    try {
        const postMsg = await PostMsg.find();

        res.status(20).json(postMsg);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new PostMsg(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}