import { Router } from "express"; 
import blogsRouter from './blog_routes';
import blogTagsRouter from './blogTags_routes';
import tagsRouter from './tag_routes'
import contactRouter from './contact_routes'
import apiRouter from './api';
import authRouter from './auth';

const router = Router(); 

router.use('/contact', contactRouter)
router.use('/blogs', blogsRouter); 
router.use('/blogtags', blogTagsRouter);  
router.use('/tags', tagsRouter);  
router.use('/api', apiRouter);
router.use('/auth', authRouter);
export default router; 