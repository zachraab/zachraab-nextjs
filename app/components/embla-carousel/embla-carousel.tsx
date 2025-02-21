import React, { useCallback, useEffect, useState, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './embla-carousel-arrow-buttons'
import { DotButton, useDotButton } from './embla-pagination-buttons'
import Link from 'next/link'
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { FaExternalLinkAlt } from "react-icons/fa";

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type Slide = {
  title: string;
  tech: string;
  description: string;
  url: string;
};

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  const [visibleSlides, setVisibleSlides] = useState<{ [key: number]: boolean }>({});

  const toggleVisibility = (index: number) => {
    setVisibleSlides(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [techVisibile, setTechVisibile] = useState<{ [key: number]: boolean }>({});

  const toggleTechInfo = (index: number) => {
    setTechVisibile(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({title, tech, description, url}, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number p-5 text-center relative overflow-hidden">
                <p className="absolute top-4 right-4">#{index + 1}</p>
                <Link target="_blank" href={url} className="relative flex gap-4 items-center font-bold text-3xl sm:text-4xl before:-skew-x-12 before:z-[-1] before:-m-1 before:ease before:duration-300 before:bg-gray-300 before:absolute before:left-0 before:-bottom-1 before:translate-x-1/4 before:h-1/4 before:w-0 hover:before:w-3/4 active:before:bg-gray-400">
                  {title} <FaExternalLinkAlt className="text-xl"/>
                </Link>
                <button onClick={() => toggleVisibility(index)} className="absolute top-4 left-4 border-4 border-zinc-200 px-4 py-2 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 active:border-zinc-300">{visibleSlides[index] ? 'Less Info' : 'More Info'}</button>
                <div className={`absolute bottom-0 ${ techVisibile[index] ? 'right-0' : '-right-full'} w-[200%] flex justify-between items-center h-3/4 bg-zinc-200 p-8 transform duration-300 ease-out ${visibleSlides[index] ? 'translate-y-0' : 'translate-y-full'}`}>
                  <p className="w-1/2 pr-8 mb-4">{description}</p>
                  <button onClick={() => toggleTechInfo(index)} className={`absolute top-2 text-3xl transform duration-300 rounded-full ${techVisibile[index] ? 'left-[50%] translate-x-2 hover:translate-x-1' : 'right-[50%] -translate-x-2 hover:-translate-x-1'}`}>{techVisibile[index] ? <LiaArrowCircleLeftSolid /> : <LiaArrowCircleRightSolid />}</button>
                  <p className="w-1/2 pl-8">{tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
