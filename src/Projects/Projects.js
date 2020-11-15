import React from 'react';
import './Projects.css';
import Footer from '../Footer/Footer';

const Projects = () => {
    return (
        <>
            <div className="projects-container">
                <h1>Sub-Urban Rail Project</h1>
                <ul>
                    <li>• GoK Approved Rs 23093 Cr & referred to MoR.</li>
                    <li>
                        • MoR advised to revise the DPR reducing no. of stations,
                        project to be bifurcated into several point to point
                        projects etc.
                    </li>
                    <li>
                        • M/s. Rites have been informed to revise the project
                        accordingly.
                    </li>
                    <li>
                        • GoK & MoR already decided to take up the first phase of
                        Project. The cost is Rs. 1745 crore.
                    </li>
                </ul>
                {/* <h1>Baiyyappanahalli-Hosur Doubling Project</h1> */}
                <h1>Yeshwanthpur Channasandra Doubling Project</h1>
                <ol>
                    <li>1. Conversion of 15 pairs (27 units) of conventional/DEMU rakes to MEMU</li>
                    <li>2. Augmenting maintenance Facility for MEMU rakes at Banaswadi (BAND)</li>
                </ol>
            </div>
            <br/>

            <Footer />

        </>
    );
}

export default Projects;
