import UTD_Logo from "../components/images/UTDLOGO.jpg"



function EducationCard({ src, className, heading, description }) {
    return (
        <div className="flex flex-col md:flex-row  space-x-8 p-10 ">
            <img src={src} alt="" className={className} />
            <div>
                <h2 className="text-2xl font-bold">{heading}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
}

export default function EducationSkills() {
    return (
        <section className="flex flex-col gap-6 py-12 md:gap-16 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
            <EducationCard
                src={UTD_Logo}
                className="h-[134px] w-[235px] -translate-x-1/8 md:h-[201px] md:w-[352px] rounded-3xl mx_auto"
                index={0}
                heading="Mastering UI/UX Design"
                description="Discover the best practices and trends in UI/UX design, ensuring an intuitive and visually appealing user experience."
            />
            <EducationCard
                src={UTD_Logo}
                className="h-[134px] w-[235px] -translate-x-1/8 md:h-[201px] md:w-[352px] rounded-3xl mx_auto"
                index={1}
                heading="Mastering UI/UX Design"
                description="Discover the best practices and trends in UI/UX design, ensuring an intuitive and visually appealing user experience."
            />
            <EducationCard
                src={UTD_Logo}
                className="h-[134px] w-[235px] -translate-x-1/8 md:h-[201px] md:w-[352px] rounded-3xl mx_auto"
                index={2}
                heading="Mastering UI/UX Design"
                description="Discover the best practices and trends in UI/UX design, ensuring an intuitive and visually appealing user experience."
            />


        </section>
    );
}
