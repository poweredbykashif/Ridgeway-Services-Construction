import Header from '@/components/Header';
import BlogHero from '@/components/BlogHero';
import BlogContent from '@/components/BlogContent';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function BlogPage() {
    return (
        <>
            <Header />
            <main>
                <BlogHero />
                <BlogContent />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
