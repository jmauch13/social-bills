import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonateButton from '../components/DonateButton';
import { Container, Col } from 'reactstrap';
//import Select from 'react-select';



const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
});


const ForumPage = () => {
  const [date, setDate] = useState('');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [posts, setPosts] = useState([]);

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get('?_limit=10');
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);

	// DELETE with Axios
	const deletePost = async (id) => {
		try {
			await client.delete(`${id}`);
			setPosts(
				posts.filter((post) => {
					return post.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	// handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		addPosts(date, title, body);
	};

	// POST with Axios
	const addPosts = async (date, title, body) => {
		try {
			let response = await client.post('', {
				title: title,
				body: body,
        date: date,
			});
			setPosts([response.data, ...posts]);
			setTitle('');
			setBody('');
		} catch (error) {
			console.log(error);
		}
	};


	return (
		<div className="app">
			<div className='ArticleContainer'>
				<h1>Social Bills Forum</h1>
			</div>
			<div className="add-post-container">
				<form onSubmit={handleSubmit}>  
        <input
          type="text"
          className='form-control'
            placeholder='Due Date'
            value={date}   
            onChange={(e) => setDate(e.target.value)}
            /> 
					<input
						type="text"
						className="form-control"
                        placeholder='Username'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name=""
						className="form-control"
						id=""
                        placeholder='Bill Info'
						cols="eight"
						rows="eight"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
                
					<button type="submit">Add Post</button>
				</form>
			</div>
			<div className="posts-container">
				<h2 className='posts'>Posts</h2>
				{posts.map((post) => {
					return (
                        <>
                        <Container>
						<Col className="post-card" key={post.id}>
              <h2 className='post-date'>{post.date}</h2>
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.body}</p>
                            
							<div className="button">
                                <DonateButton />
								<div className="delete-btn" onClick={() => deletePost(post.id)}>
									Delete Post
								</div>
                            </div>
						</Col>
                        <Col>
                        <DonateButton />
                        </Col>
                        </Container>
                        </>
					);
				})}
			</div>
		</div>
	);
};

export default ForumPage;