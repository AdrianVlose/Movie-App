import styled from 'styled-components';

export const DeleteIconForSearch = styled.img.attrs({
  src: '/src/assets/trash.svg',
  alt: 'delete icon',
})`
  position: absolute;
  align-self: center;
  right: 0.5rem;
  z-index: 10;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LeftArrowIcon = styled.img.attrs({
  src: '/src/assets/left-arrow.svg',
  alt: 'left-arrow',
})`
  position: absolute;
  z-index: 10;
  align-self: center;
  transition: all 0.3s ease;
  left: 0.1rem;

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.1;
  }

  @media (width <= 970px) {
    top: 0;
  }
`;

export const RightArrowIcon = styled.img.attrs({
  src: '/src/assets/right-arrow.svg',
  alt: 'right-arrow',
})`
  position: absolute;
  z-index: 10;
  align-self: center;
  transition: all 0.3s ease;
  right: 0.1rem;

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.1;
  }

  @media (width <= 970px) {
    top: 0;
  }
`;

export const SearchBarIcon = styled.img.attrs((props) => ({
  src: `/src/assets/${props.src}.svg`,
  alt: `${props.src} icon`,
}))`
  padding: 0.1rem;
`;
