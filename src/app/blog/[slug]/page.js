import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { blogs, featuredBlogs } from '@/data/blogs';

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const allBlogs = [...blogs, ...featuredBlogs];
    const blog = allBlogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Blog post not found: {slug}</h1>
            </div>
        );
    }

    const sidebarBlogs = allBlogs.filter(b => b.slug !== slug).slice(0, 3);

    return (
        <div className="blog-detail-wrapper">
            <Header />

            <article style={{ maxWidth: '1400px', margin: '0 auto', paddingTop: 'var(--ds-spacing-lg)' }}>
                <div className="detail-top-info">
                    <div className="info-left">
                        <div className="top-meta">
                            <span className="detail-tag">{blog.tag}</span>
                            <span className="meta-sep">•</span>
                            <span className="detail-date">{blog.date}</span>
                        </div>
                        <h1 className="heading-1" style={{ color: 'var(--ds-text-primary)' }}>{blog.title}</h1>
                    </div>
                </div>

                <div className="blog-detail-hero" style={{ backgroundImage: `url(${blog.img})` }} />

                <div className="blog-detail-grid">
                    <div className="blog-detail-main">
                        <div className="blog-content-inner" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        <div className="blog-detail-footer">
                            <a href="/blog" className="btn outline">← Back to Blog</a>
                        </div>
                    </div>

                    <aside className="blog-sidebar-dedicated">
                        <div className="sidebar-widget">
                            <h4 className="widget-title">Latest Posts</h4>
                            <div className="sidebar-post-list">
                                {sidebarBlogs.map((p, i) => (
                                    <a key={i} href={`/blog/${p.slug}`} className="sidebar-post-item">
                                        <img src={p.img} alt="" className="post-thumb" />
                                        <div className="post-info">
                                            <h5>{p.title}</h5>
                                            <span>{p.date}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-widget">
                            <h4 className="widget-title">Categories</h4>
                            <div className="tag-cloud">
                                {['Construction', 'Design', 'Safety', 'Innovation', 'Residential', 'Commercial'].map(tag => (
                                    <span key={tag} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-widget">
                            <h4 className="widget-title">Popular Tags</h4>
                            <div className="hashtag-list">
                                {['#modernbuilding', '#sustainable', '#ridgeway', '#architecture'].map(tag => (
                                    <a key={tag} href="#" className="hashtag-link">{tag}</a>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </article>

            <Newsletter />
            <Footer />
        </div>
    );
}
