import React ,{useState,useEffect} from 'react';
import axios from 'axios';



export default ({postId}) => {
    const [comments,setComments] = useState([]);

    const fetchPosts = async () =>{
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    }

    useEffect(() =>{
        fetchPosts();
    },[]);

    const renderComments = Object.values(comments).map( comment=> {
    return <li key={comment.id}>{comment.content}</li>
        
    })
return <ul >{renderComments}</ul>
}