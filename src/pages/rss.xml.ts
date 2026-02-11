import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Security Research Blog',
        description: 'Vulnerability research, AI safety, and cybersecurity policy.',
        site: context.site,
        items: blog
            .filter((post) => !post.data.draft)
            .map((post) => ({
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link: `/blog/${post.slug}/`,
            })),
        customData: `<language>en-us</language>`,
    });
}
