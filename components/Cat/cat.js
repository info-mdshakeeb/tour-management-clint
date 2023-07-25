import Link from "next/link";
import Container from "../ui/Container";

const Cat = () => {
    return (
        <div className="bg-orange-300">
            <Container className={''}>
                <section class=" ">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div class="max-w-screen-md">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Let's find more More with together.</h2>
                            <p class="mb-8 font-light text-white sm:text-xl ">In unity, we unravel hidden gems, embrace diverse cultures, and forge lasting memories. Together, we'll seek new horizons, enriching our journey with laughter, love, and cherished moments.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Link href="/tours" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Cat