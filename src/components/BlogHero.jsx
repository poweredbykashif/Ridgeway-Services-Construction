export default function BlogHero() {
    return (
        <section className="blog-hero section-padding" style={{ paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
            <div className="container">
                <div className="blog-hero-content" style={{ textAlign: 'left' }}>
                    <span className="blog-tag-label">Blog</span>
                    <h1 className="heading-1">Discover our latest news</h1>
                    <p className="body-text large" style={{ maxWidth: '600px', margin: '1rem 0 2rem' }}>
                        Discover the achievements that set us apart. From groundbreaking projects to industry accolades, we take pride in our accomplishments.
                    </p>
                    <div className="blog-search-container" style={{ marginLeft: 0 }}>
                        <input type="text" placeholder="Input Placeholder" className="input-field blog-search-input" />
                        <button className="btn blog-search-btn">Find Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
