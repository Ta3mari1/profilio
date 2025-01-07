import UTD_Logo from "../components/images/UTDLOGO.jpg"
import UOP from "../components/images/UOP.jpg"
import Colin from "../components/images/Colin.jpg"
import { motion } from "framer-motion";

const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
    })
};


function EducationCard({ src, className, index, heading, year, description }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            className="flex flex-1 flex-col  gap-6 overflow-hidden md:flex-row"
        >
            <div className="flex flex-col md:flex-row items-center justify-center space-x-8 p-10">
                <img src={src} alt="" className={`h-[200px] w-[250px] object-contain-cover rounlded-3x ${className}`} />
                <div className="flex-1 min-h-[150px]">
                    <h2 className="text-3xl font-bold">{heading}</h2>
                    <h3 className="text-1xl font-bold">{year}</h3>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function EducationSkills() {
    return (
        <section className="flex flex-col gap-6 py-12 md:gap-16 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
            <EducationCard
                src={UTD_Logo}
                className="h-[134px] w-[235px] -translate-x-1/8 md:h-[201px] md:w-[352px] rounded-3xl mx_auto"
                index={0}
                heading="The University of Texas at Dallas"
                year="B.S. in Computer Science | Expected Graduation: Spring 2025 "
                description="Relevant Coursework: Data Structures & Algorithms, Machine Learning, Database Systems, Operating Systems, Software Engineering, Computer Networks, Artificial Intelligence, Web Development, Programming Languages."
            />
            <EducationCard
                src={UOP}
                className="h-[134px] w-[235px] -translate-x-1/8 md:h-[201px] md:w-[352px] rounded-3xl mx_auto"
                index={1}
                heading="The University of Petra"
                year="Completed Coursework in Computer Science | 2020-2021"
                description=" Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Computer Networks, Web Development. "
            />
            <EducationCard
                src={Colin}
                className="h-[134px] w-[235px] -translate-x-1/8 md:h-[201px] md:w-[352px] rounded-3xl mx_auto"
                index={2}
                heading="Collin College"
                year="Associate of Science (A.S.) | 2021-2023"
                description="Completed Elective Coursework in Science and Mathematics."
            />

            <br />

            <div className="flex flex-col items-center mt-12">
                <h2 className="text-3xl font-bold text-center mb-6">Technical Skills</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Java</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">JavaScript</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Python</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">React.js</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Node.js</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Flask</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Django</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">SQL</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">MongoDB</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Git & GitHub</p>
                    </div>
                    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold">Docker</p>
                    </div>
                </div>
            </div>
        </section>


    );
}
