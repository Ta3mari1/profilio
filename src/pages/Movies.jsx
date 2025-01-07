import { Button } from '../components/tailframes/button';
import { CircleArrowRightIcon } from '../components/tailframes/assets/circle-arrow-right-icon.tsx';

function PostImageCard({ src, className, }) {
    return (
        <div className="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden  ">
            <div
                className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center"
            >
                <img src={src} alt="" className={className} />
            </div>
            <div className="flex flex-col items-start gap-3">

                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold">
                        Blog Post Heading;lk;kk
                    </h3>
                    <p className="max-w-[90%] text-sm leading-tight text-slate-400">
                        We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
                    </p>
                </div>

            </div>
        </div>
    );
};



export default function Preview() {
    return (
        <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16">
            <div className="flex justify-between">


            </div>
            <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                <PostImageCard src="https://www.tailframes.com/images/illustration-2.webp" className="h-[134px] w-[235px] -translate-x-1/4" />
                <PostImageCard src="https://www.tailframes.com/images/illustration.webp" className="h-[220px] w-[116px]" />
                <PostImageCard src="https://www.tailframes.com/images/illustration-3.webp" className="h-[217px] w-[111px]" />
                <PostImageCard src="https://www.tailframes.com/images/illustration-3.webp" className="h-[217px] w-[111px]" />
                <PostImageCard src="https://www.tailframes.com/images/illustration-3.webp" className="h-[217px] w-[111px]" />
                <PostImageCard src="https://www.tailframes.com/images/illustration-3.webp" className="h-[217px] w-[111px]" />
                <PostImageCard src="https://www.tailframes.com/images/illustration-3.webp" className="h-[217px] w-[111px]" />
            </div>
        </section>
    );
};