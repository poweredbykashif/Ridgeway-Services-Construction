"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";

export default function CommercialProjects() {
    const categories = [
        {
            title: "Retail",
            desc: "High-end retail storefronts and showroom fit-outs designed to enhance brand presence and customer experience.",
            link: "/projects/commercial/retail",
            img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Restaurants",
            desc: "Expertly crafted hospitality spaces including fine dining, casual eateries, and premium cafe environments.",
            link: "/projects/commercial/restaurants",
            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Offices",
            desc: "Sophisticated corporate environments engineered for productivity, collaboration, and modern professional needs.",
            link: "/projects/commercial/offices",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Daycare",
            desc: "Safe and inspiring learning environments built with premium materials for the next generation.",
            link: "/projects/commercial/daycare",
            img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* 1. Header Section */}
                <section className="section-padding" style={{ textAlign: 'center', paddingTop: 'var(--ds-spacing-xl)' }}>
                    <div className="container">
                        <span style={{ color: '#ff6600', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            Specialized Sectors
                        </span>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>Commercial</h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Providing robust commercial spaces across diverse industries, from luxury retail to sophisticated
                            office environments and specialized childhood education facilities.
                        </p>
                    </div>
                </section>

                {/* 2. Category List Section with Images */}
                <section className="container" style={{ paddingBottom: 'var(--ds-spacing-xl)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: '2rem' }}>
                        {categories.map((cat, i) => (
                            <a
                                key={i}
                                href={cat.link}
                                className="commercial-cat-card animate-fade-in"
                                style={{
                                    position: 'relative',
                                    height: '350px',
                                    borderRadius: 'var(--ds-radius-md)',
                                    overflow: 'hidden',
                                    textDecoration: 'none',
                                    color: '#fff',
                                    boxShadow: 'var(--ds-shadow-md)',
                                    transition: 'transform 0.4s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.querySelector('.cat-img-box').style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.querySelector('.cat-img-box').style.transform = 'scale(1)';
                                }}
                            >
                                <div
                                    className="cat-img-box"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${cat.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.6s ease',
                                        zIndex: 0
                                    }}
                                />
                                <div style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '100%',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end'
                                }}>
                                    <h2 className="heading-2" style={{ color: '#fff', margin: 0, fontSize: '2.5rem' }}>{cat.title}</h2>
                                    <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.9)', maxWidth: '400px' }}>{cat.desc}</p>
                                    <div style={{ marginTop: '1.5rem', fontWeight: 'bold', color: '#ff6600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Explore Sector <span>↗</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 3. Blogs Section */}
                <Blogs />

                {/* 4. Newsletter Section */}
                <Newsletter />
            </main>

            {/* 5. Footer Section */}
            <Footer />
        </div>
    );
}
