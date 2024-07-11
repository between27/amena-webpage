import {Card} from "./components/card.jsx";
import { Navbar } from "./components/Navbar.jsx";

export function App() {
    let cards = [
        {
            title: "Medicines",
            description: "Welcome to Heal Hub, where wellness meets convenience on your terms...",
            image: "medicine.svg",
            backgroundColor: "bg-first",
            buttonColor: "bg-bFirst",
            primaryText: "text-firstPrimary",
            textSecondary: "text-firstSecondary",
            opacity: "bg-opacity-[24%]"
        },
        {
            title: "Dine Ease",
            description: "Dine Ease, ultimate and best destination, Ease brings you your favorite flavors...",
            image: "dine.svg",
            backgroundColor: "bg-second",
            buttonColor: "bg-bSecond",
            primaryText: "text-secondPrimary",
            textSecondary: "text-secondSecondary",
            opacity: "bg-opacity-[37%]"
        },
        {
            title: "Find Cars",
            description: "AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle...",
            image: "car.svg",
            backgroundColor: "bg-third",
            buttonColor: "bg-bThird",
            primaryText: "text-thirdPrimary",
            textSecondary: "text-thirdSecondary",
            opacity: "bg-opacity-[47%]"
        },
        {
            title: "Electronics",
            description: "ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience.",
            image: "electronics.svg",
            backgroundColor: "bg-fourth",
            buttonColor: "bg-bFourth",
            primaryText: "text-fourthPrimary",
            textSecondary: "text-fourthSecondary",
            opacity: "bg-opacity-[37%]"
        },
    ]
// background: linear-gradient(180deg, #FAFAFA 0%, #FCFCFC 100%);
    return (
        <div className="lg:mx-44">
        <Navbar />
        <div className="text-center text-5xl font-bold my-10">
            <h1>Medicines, Cars, Dining, Electronics 
            Your All-in-One Solution!</h1>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {
            cards.map((card, index) => {
                return <Card 
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                backgroundColor={card.backgroundColor}
                buttonColor={card.buttonColor}
                primaryText={card.primaryText}
                secondaryText={card.secondaryText}
                opacity={card.opacity}
                />
            })
        }
        </div>
        </div>
        </div>
    )
}
