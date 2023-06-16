import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts')

function getAllPosts() {
    fs.readdirSync(postsDirectory);
}