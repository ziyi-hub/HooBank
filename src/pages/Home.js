import styles from "../style";
import { Hero, Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Testimonials } from "../components";
import React from "react";


const App = () => (
    <div className="bg-black w-full overflow-hidden">

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>

    </div>
);

export default App;
