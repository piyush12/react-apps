import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Avatar({
  Imagesrc,
  alt,
  width = 40,
  height = 40,
}: {
  Imagesrc: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <AvatarStyles>
      <Image
        src={`${process.env.NEXT_PUBLIC_FEEDBACK_API_ROUTE_URL}${Imagesrc}`}
        alt={alt}
        width={width}
        height={height}
      />
    </AvatarStyles>
  );
}

export default Avatar;

const AvatarStyles = styled.div`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
