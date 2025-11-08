import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//샤드씨엔 설치로 인해 생기는 헬퍼 함수입니다.
//cn은 className에 여러 style을 적용할 수 있게 해줍니다.
