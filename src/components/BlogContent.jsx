import { featuredBlogs as blogData } from '@/data/blogs';

export default function BlogContent() {
    const featuredBlogs = blogData;

    const sidebarItems = [
        { title: "Top Hidden Gems: Must-Visit Spots This Year", date: "August 7, 2017", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=200&auto=format&fit=crop", slug: "wanderlust-unleashed" },
        { title: "Bucket List: 25 Adventures for Every Traveler", date: "March 23, 2013", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop", slug: "travel-bucket-list" },
        { title: "Travel Like a Local: Tips for Authentic Experiences", date: "May 31, 2015", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=200&auto=format&fit=crop", slug: "travel-like-a-local" }
    ];

    return (
        <section className="blog-content-section section-padding">
            <div className="blog-layout-container">
                <div className="blog-main-area">
                    <h2 className="heading-2">Whiteboards are remarkable.</h2>
                    <div className="blog-main-grid">
                        {featuredBlogs.map((b, i) => (
                            <a key={i} href={`/blog/${b.slug}`} className="blog-card-portrait">
                                <div className="blog-card-img-full" style={{ backgroundImage: `url(${b.img})` }}>
                                    <div className="blog-card-overlay-gradient">
                                        <span className="blog-card-tag">{b.tag}</span>
                                        <h3 className="blog-card-title-large">{b.title}</h3>
                                        <p className="blog-card-desc-small">{b.desc}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <aside className="blog-sidebar">
                    <div className="sidebar-section">
                        <h4 className="sidebar-heading">Featured</h4>
                        <div className="sidebar-list">
                            {sidebarItems.map((item, i) => (
                                <a key={i} href={`/blog/${item.slug}`} className="sidebar-item">
                                    <img src={item.img} alt="" className="sidebar-item-thumb" />
                                    <div className="sidebar-item-info">
                                        <span className="sidebar-item-date">{item.date}</span>
                                        <h5 className="sidebar-item-title">{item.title}</h5>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-section" style={{ marginTop: '2rem' }}>
                        <h4 className="sidebar-heading">Latest</h4>
                        <div className="sidebar-list">
                            {/* Reusing same items for demo */}
                            <div className="sidebar-item">
                                <div className="sidebar-item-info">
                                    <span className="sidebar-item-date">October 24, 2024</span>
                                    <h5 className="sidebar-item-title">The Ordinary: Architectural Excellence</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
