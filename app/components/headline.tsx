import DrawSvg from "./draw-svg";
export default function Headline({ content, isWhite = false, widthSize = 'w-3/4' }: {content : string, isWhite?: boolean, widthSize?: string}) {
    return (
        <>
            <DrawSvg drawText={content} isWhite={isWhite} widthSize={widthSize}/>
            <hr />
        </>
    )
}