import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { commercialProjects } from "@/data/projects";

const restaurantData = [
    {
        name: "Fat Bastard Burrito",
        images: [
            { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop", title: "Signature Tacos", desc: "Fresh ingredients served in a vibrant, high-traffic environment." },
            { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop", title: "Custom Counter", desc: "Bespoke industrial millwork for efficient customer service." },
            { url: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1000&auto=format&fit=crop", title: "Brand Mural", desc: "Integrated graphic elements that reflect the brand's bold identity." },
            { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop", title: "Open Kitchen", desc: "Transparent food preparation zones with specialized ventilation." },
            { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop", title: "Dining Area", desc: "Industrial-chic seating designed for comfort and durability." },
            { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop", title: "Ambient Lighting", desc: "Strategic track lighting to create a premium fast-casual atmosphere." }
        ]
    },
    {
        name: "Taco Bell",
        images: [
            { url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop", title: "Modern Facade", desc: "Rigid corporate standards met with premium exterior cladding." },
            { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop", title: "Digital Kiosks", desc: "Seamless technology integration for a modern ordering experience." },
            { url: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1000&auto=format&fit=crop", title: "Drive-Thru", desc: "Optimized workflow for high-volume customer throughput." },
            { url: "https://images.unsplash.com/photo-1623156323174-729606706935?q=80&w=1000&auto=format&fit=crop", title: "Interior Seating", desc: "Ergonomic furniture solutions for consistent brand experience." },
            { url: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1000&auto=format&fit=crop", title: "Quick Service", desc: "High-efficiency kitchen layouts for rapid order fulfillment." },
            { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop", title: "Bespoke Details", desc: "Carefully curated architectural accents that enhance the brand." }
        ]
    },
    {
        name: "Osmows",
        images: [
            { url: "https://images.unsplash.com/photo-1621275471769-e6aa3e15bb71?q=80&w=1000&auto=format&fit=crop", title: "Vibrant Palette", desc: "Brand-specific colors integrated into the interior architecture." },
            { url: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1000&auto=format&fit=crop", title: "Rotisserie Zone", desc: "Specialized extraction systems for high-heat cooking equipment." },
            { url: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop", title: "Custom Woodwork", desc: "Bespoke bench seating and counter finishes for a warm feel." },
            { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop", title: "Modern Dining", desc: "Clean and welcoming environments for a premium dining feel." },
            { url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop", title: "Food Prep", desc: "Highly organized workflows to support rapid service growth." },
            { url: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1000&auto=format&fit=crop", title: "Main Dining", desc: "Optimized seating layouts for maximum capacity and comfort." }
        ]
    }
];

export default function RestaurantProjects() {
    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* Header Section */}
                <section className="section-padding" style={{ textAlign: 'left', paddingTop: 'calc(var(--ds-spacing-xl) + 40px)' }}>
                    <div className="container">
                        <div style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: '#ffd54f', color: '#000', fontWeight: 'bold', fontSize: '0.75rem', borderRadius: '4px', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Commercial Portfolio
                        </div>
                        <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>Restaurant Projects</h1>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0', fontSize: '1.1rem' }}>
                            Specializing in high-performance hospitality construction. From global franchises to boutique eateries,
                            we deliver spaces that reflect brand excellence and operational efficiency.
                        </p>
                    </div>
                </section>

                {/* Restaurant Brand Sections */}
                {restaurantData.map((brand, bIndex) => (
                    <section key={bIndex} className="container" style={{ marginBottom: '5rem' }}>
                        <div style={{
                            backgroundColor: '#ffd54f',
                            color: '#000',
                            padding: '1.5rem 2rem',
                            textAlign: 'left',
                            marginBottom: '2rem',
                            borderRadius: '8px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            fontSize: '1.5rem',
                            letterSpacing: '0.1em'
                        }}>
                            {brand.name}
                        </div>

                        <div className="restaurant-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '3rem'
                        }}>
                            {brand.images.map((item, iIndex) => (
                                <div key={iIndex} style={{
                                    height: '350px',
                                    borderRadius: 'var(--ds-radius-md)',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        const overlay = e.currentTarget.querySelector('.gallery-overlay');
                                        if (overlay) overlay.style.opacity = '1';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        const overlay = e.currentTarget.querySelector('.gallery-overlay');
                                        if (overlay) overlay.style.opacity = '0';
                                    }}
                                >
                                    <img
                                        src={item.url}
                                        alt={`${brand.name} project detail ${iIndex + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className="gallery-overlay" style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '2rem',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                        zIndex: 2,
                                        textAlign: 'center'
                                    }}>
                                        <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{item.title}</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.4' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>
                ))}

                <Blogs />

                <div style={{ marginTop: '4rem' }}>
                    <Newsletter />
                </div>
            </main>

            <Footer />
        </div>
    );
}

