import * as mysql from 'mysql';
import config from '../config'

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

import blog_queries from './queries/blog_queries';
import blogTags_queries from './queries/blogTags_queries';
import tag_queries from './queries/tag_queries';
import users_queries from './queries/users_queries';

export default {
    blog_queries,
    blogTags_queries,
    tag_queries,
    users_queries
}