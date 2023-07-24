import tours from "@/assets/data/tours";
import Container from "../ui/Container";
import { Subtitle, Title } from "../ui/Title";
import Card from "./Card";

const Explore = () => {
    return (
        <Container>
            <div className="">
                <Subtitle >
                    Explore
                </Subtitle>
                <Title>
                    Our Feature Tours
                </Title>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {tours.map(tour => <Card key={tour.id} tour={tour} />)}
            </div>


        </Container>
    );
};

export default Explore;