export default function BackgroundImage({imageFileName, headline}: {imageFileName:string, headline?:string}) {

    return (
        <div className="parallax flex justify-center items-center" style={{ backgroundImage: `url(/${imageFileName})` }}>
           
           {headline && ( 
                <h2 className="z-[2] text-2xl md:text-6xl lg:text-8xl font-bold text-white">{headline}</h2> 
            )}
        </div>
    )
}