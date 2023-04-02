import SocialList from './SocialList';
import useFetch from '../hooks/useFetch';

const Social = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:8000/posts');

    return ( 
        <div className="social">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <SocialList posts={posts} title="All Posts"/>
        </div>
     );
}

export default Social;