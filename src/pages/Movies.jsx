import { motion } from "framer-motion";

function MoviePostCard({ src, title }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col items-start gap-4 max-w-xs mx-auto sm:max-w-sm md:max-w-md"
            whileHover={{ scale: 1.05 }}
        >

            <div className="relative w-full aspect-[2/3] rounded-xl shadow-lg overflow-hidden">
                <img src={src} alt={title} className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
}

export default function Movies() {
    return (
        <section className=" py-12">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl font-bold text-center"
                >

                </motion.h2>


                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                >
                    <MoviePostCard
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkM8CdEzi1ETGZgwkTgPgR9OOirqY2ljIMg8a-Vvx0stnMCHzO"
                        title="Movie 1"
                    />
                    <MoviePostCard
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZs4yy0Fbpakp93upA5H9GuZGusregfVijjawTfYoLZlrUCtrk"
                        title="Movie 2"
                    />
                    <MoviePostCard
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaTHAbTa2MTEGM_PwqBU61jEzjEcQfx-Zb39fyctMdZheq2Uj"
                        title="Movie 3"
                    />
                    <MoviePostCard
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2Cghv6inVgiEL-vAYFJg8Rff175LiNaWKzV4tytSLG6D0c2n_"
                        title="Movie 4"
                    />
                    <MoviePostCard
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRQY22fAfc4eI-8Fpg12E7d7O68wz0uqJvXHunh8l3Xbg1T6Np"
                        title="Movie 5"
                    />
                    <MoviePostCard
                        src="https://m.media-amazon.com/images/M/MV5BMWEyNGVkYWMtZThlNy00ZTY0LWExZWItOWE0YjM0MDU5YWY4XkEyXkFqcGc@._V1_.jpg"
                        title="Movie 6"
                    />
                    <MoviePostCard
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRoz0vMGDo8AoeSDvy-Z2LeursbZLW-T0zFIWFDd5GLb5323ZoD"
                        title="Movie 7"
                    />

                </motion.div>
            </div>
        </section>
    );
}
