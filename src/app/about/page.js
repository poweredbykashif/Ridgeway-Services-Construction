import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import Teams from '@/components/Teams';
import Services from '@/components/Services';
import ProjectsSplit from '@/components/ProjectsSplit';
import Blogs from '@/components/Blogs';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <AboutHero />
                <Teams />
                <Services />
                <ProjectsSplit />
                <Blogs />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
