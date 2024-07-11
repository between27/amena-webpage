export function Button ({buttonColor}) {
    return (
        <button className={buttonColor + " drop-shadow-xl shadow-black w-[123px] h-[31px] text-sm text-white rounded-full"}>Visit Page</button>
    )
}
Button.propTypes