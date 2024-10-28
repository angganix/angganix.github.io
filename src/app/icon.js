import { ImageResponse } from "next/og";
import { FcPuzzle } from "react-icons/fc";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <FcPuzzle
        size={32}
        className="w-full h-full flex items-center justify-center"
      />
    ),
    {
      ...size,
    }
  );
}
