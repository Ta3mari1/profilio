import { Button } from '../components/tailframes/button';
import { CircleArrowRightIcon } from '../components/tailframes/assets/circle-arrow-right-icon.tsx';
import { motion } from "framer-motion";


const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
    })
};


function PostDetails() {
    return (
        <p className="inline-flex items-center justify-start gap-2">
        </p>
    );
}


function PostImageCard({ src, className, index, heading, description }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            className="flex flex-1 flex-col justify-center gap-6 overflow-hidden md:flex-row"
        >
            <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-auto md:flex-1">
                <img src={src} alt="" className={className} />
            </div>
            <div className="flex flex-1 flex-col items-start gap-3 md:flex-1 md:justify-between md:gap-52">
                <div className="flex flex-col gap-3 md:gap-4">
                    <PostDetails />
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h3 className="text-2xl font-semibold md:text-3xl">
                            {heading}
                        </h3>
                        <p className="max-w-xs text-sm leading-tight text-slate-400 md:max-w-xl md:text-base">
                            {description}
                        </p>
                    </div>
                </div>
                <div
                    size="large"
                    variant="text"
                    className="p-0"

                >

                </div>
            </div>
        </motion.div>
    );
}


export default function Preview() {
    return (
        <section className="flex flex-col gap-6 py-12 md:gap-16 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
            <PostImageCard
                src="https://www.tailframes.com/images/illustration-2.webp"
                className="h-[134px] w-[235px] -translate-x-1/4 md:h-[201px] md:w-[352px]"
                index={0}
                heading="Mastering UI/UX Design"
                description="Discover the best practices and trends in UI/UX design, ensuring an intuitive and visually appealing user experience."
            />
            <PostImageCard
                src="https://www.tailframes.com/images/illustration.webp"
                className="h-[220px] w-[116px] md:h-[330px] md:w-[174px]"
                index={1}
                heading="The Power of Web Performance"
                description="Optimizing your website's speed and performance can significantly impact user engagement and SEO rankings."
            />
            <PostImageCard
                src="https://www.tailframes.com/images/illustration-3.webp"
                className="h-[217px] w-[111px] md:h-[325px] md:w-[174px]"
                index={2}
                heading="Why JavaScript is Everywhere"
                description="Explore the rise of JavaScript and its dominance in web development, from front-end frameworks to server-side applications."
            />
        </section>
    );
}
