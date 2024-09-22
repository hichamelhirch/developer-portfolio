// app/api/images/blog_image.js
import fs from 'fs';
import path from 'path';

export async function GET(req) {
  const imagesDirectory = path.join(process.cwd(), 'public', 'images_blogs');

  try {
    const files = fs.readdirSync(imagesDirectory);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    return new Response(JSON.stringify(imageFiles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur de lecture du répertoire:', error);
    return new Response(JSON.stringify({ error: 'Failed to read directory' }), { status: 500 });
  }
}
