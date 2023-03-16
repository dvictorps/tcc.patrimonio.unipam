import { CSS } from "@stitches/react";
import { ImageBox, MainContainer } from "./styles";

type ImageProps = {
    src: string
    size?: string | number
    width?: string | number
    height?: string | number
    css?: CSS

}

export function Image({ src, size, width, height, css }: ImageProps) {
    return (
        <MainContainer css={css}>
            <ImageBox src={src} width={size || width} height={size || height} />
        </MainContainer>
    )
}