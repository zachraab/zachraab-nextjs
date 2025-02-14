export default function Headline({ content }: {content : string}) {
    return (
        <>
            <h2 data-aos="fade-left" className="font-bold text-4xl text-center md:text-left">{content}</h2>
            <hr />
        </>
    )
}