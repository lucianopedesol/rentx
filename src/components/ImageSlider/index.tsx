import React from 'react';

import {
    Container,
    ImageIndexs,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

interface IProps {
    imageUrl: string;
}
export function ImageSlider({ imageUrl }: IProps) {
    return (
        <Container>
            <ImageIndexs>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexs>

            <CarImageWrapper>
                <CarImage
                    source={{ uri: imageUrl }}
                    resizeMode="contain"
                />
            </CarImageWrapper>
        </Container>
    );
}