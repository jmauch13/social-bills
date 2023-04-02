import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const SocialDetails = () => {
    const { id } = useParams();
    const { data: post, error, isPending } =  useFetch('http://localhost:8000/posts/' + id);
    const history = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/posts/'+ post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="social-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{post.title}</h2>
                <p>Written by {post.author}</p>
                <div>{post.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default SocialDetails;