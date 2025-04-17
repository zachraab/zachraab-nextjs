import HeroInternal from "./hero-internal";

export default function HeroInternalSvg() {

    return (
        <div className='gradient-container md:pb-40 lg:pb-60 relative'>
            <div className='svg-spacer wave'></div>
            <HeroInternal
                headline="Showcasing My Journey: Personal Projects & Professional Work"
                description="Here, you'll find a collection of personal projects that reflect my creativity and curiosity, alongside professional work that highlights my experience and dedication. Dive in and explore the work that defines me!"
            />
        </div>
    );
}