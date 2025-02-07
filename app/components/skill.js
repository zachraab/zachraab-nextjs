export default function Skill({source, name, mode = "light"}) {
    let iconClasses = "w-20 h-20 p-3 m-2 md:w-40 md:h-40 md:m-5 rounded-lg shadow-xl"
    iconClasses += (mode === "light") ? "" : " bg-zinc-600";
    return  <img src={source} alt={"The logo for " + name} className={iconClasses}/>
}