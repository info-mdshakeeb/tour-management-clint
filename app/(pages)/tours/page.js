import tours from "@/assets/data/tours";
import Search from "@/components/Hero/Search";
import Card from "@/components/services/Card";
import Container from "@/components/ui/Container";

const page = () => {
    return (
        <div className="">
            <div className="">
                <div className="tour_cover">
                    <h1 className="text-[2.5rem] text-white" >All Tours</h1>
                </div>
                <Container className="my-20">
                    <Search />
                    <div className="mt-10">
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                            {tours.map(tour => <Card key={tour.id} tour={tour} />)}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default page;