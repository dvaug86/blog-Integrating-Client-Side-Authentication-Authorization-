import * as React from 'react';
import HomePreviewCard from '../components/HomePreviewCard';
import { apiService } from '../services/api-service';

import type { IBlog } from '../utils/types'; //maybe remove 'types'

const HomePage: React.FC<HomePageProps> = (props) =>{

    const [blogs, setBlogs] = React.useState<IBlog[]>([]);

    React.useEffect(() =>{  
        (async () => {
            const res = await apiService('/api/blogs');
            const blogs = await res.json();
            setBlogs (blogs)
            
        })();
    },[]);
//this function is called an immediately invoked function expression (iife )
//this is used so that we can immediately use an async await function instead of being stuck with a .then function


return(
    <main className="container">
        <div className="row">                
            {blogs.map(blog => <HomePreviewCard key={`blog-preview-${blog.id}`} blog={blog}/> )} 
            
        </div>
    </main>
);
};


interface HomePageProps {}

export default HomePage;