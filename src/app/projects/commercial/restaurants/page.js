import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blogs";
import { commercialProjects } from "@/data/projects";

const restaurantData = [
    {
        name: "Fat Bastard",
        images: [
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Taco Bell",
        images: [
            "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1623156323174-729606706935?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        name: "Osmows",
        images: [
            "https://images.unsplash.com/photo-1621275471769-e6aa3e15bb71?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1000&auto=format&fit=crop"
        ]
    }
];

export default function RestaurantProjects() {
    return (
        <div style={{ backgroundColor: 'var(--ds-bg-primary)', minHeight: '100vh' }}>
            <Header />

            <main>
                {/* Header Section */}
                <section className="section-padding" style={{ textAlign: 'center', paddingTop: 'var(--ds-spacing-xl)' }}>
                    <div style={{ display: 'inline-block', padding: '0.25rem 1rem', backgroundColor: '#ffd54f', color: '#000', fontWeight: 'bold', fontSize: '0.75rem', borderRadius: '4px', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Commercial Portfolio
                    </div>
                    <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>Restaurant Projects</h1>
                    <p className="body-text" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Specializing in high-performance hospitality construction. From global franchises to boutique eateries,
                        we deliver spaces that reflect brand excellence and operational efficiency.
                    </p>
                </section>

                {/* Restaurant Brand Sections */}
                {restaurantData.map((brand, bIndex) => (
                    <section key={bIndex} className="container" style={{ marginBottom: '5rem' }}>
                        <div style={{
                            backgroundColor: '#ffd54f',
                            color: '#000',
                            padding: '1.5rem',
                            textAlign: 'center',
                            marginBottom: '2rem',
                            borderRadius: '8px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            fontSize: '1.5rem',
                            letterSpacing: '0.1em'
                        }}>
                            {brand.name}
                        </div>

                        <div className="restaurant-grid">
                            {brand.images.map((img, iIndex) => (
                                <div key={iIndex} className="restaurant-image-wrapper">
                                    <img
                                        src={img}
                                        alt={`${brand.name} project detail ${iIndex + 1}`}
                                        className="restaurant-image"
                                    />
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

