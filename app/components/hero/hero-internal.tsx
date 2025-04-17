import Image from 'next/image';

export default function HeroInternal({image, alt = '', isPortraitImage, headline, description}: {image?: any, alt?: string, isPortraitImage?: boolean, headline: string, description: string}) {
   return(
        <section className='flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-16 items-center text-center md:text-left'>
            { image && (
            <div className={`relative h-80 xl:h-[30rem] w-full ${ isPortraitImage && 'md:w-1/2'} lg:w-1/3 overflow-hidden`}>
                <Image 
                    src={image}
                    alt={alt}
                    fill
                    priority
                    sizes='75vw'
                    className="object-top object-cover rounded-xl"
                    data-aos="fade-in"
                    />
            </div>
            )}   
            <div className={image ? 'w-full lg:w-1/2' : 'w-full'}>
                <h1 className='text-4xl font-bold' data-aos="fade-in">{headline}</h1>
                    <br/>
                <p data-aos="fade-right">{description}</p>
            </div>
        </section>
	)
}