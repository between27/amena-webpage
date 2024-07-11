import { Button } from "./Button";

export function Card({buttonColor,backgroundColor, title, description, image,primaryText, secondaryText, opacity}) {
    return <div className={opacity +" "+ backgroundColor + " w-[346px] h-[360px] rounded-2xl"}>
        <div className="flex justify-center">
            <img src={image} alt="medicine" className="w-[193px] h-[177.94]"/>
        </div>
        <div>
        <h1 className={primaryText + " text-center text-3xl font-bold"}>{title}</h1>
        <p className={secondaryText+" text-firstSecondary p-4 text-center text-sm"}>{description}</p>
        </div>
        <div className="flex justify-center">
       <Button buttonColor={buttonColor} />
       </div>
    </div>
}

Card.propTypes