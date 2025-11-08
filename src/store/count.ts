// 전역상태를 보관하기 위한 곳
//src/store/count.ts
import { create } from "zustand";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};
//create는 값을 반환하기 까지 함. -> hook으로 사용 가능
export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  increase: () => {
    set((store) => ({
      count: store.count + 1,
    }));
  },
  decrease: () => {
    set((store) => ({
      count: store.count - 1,
    }));
  },
})); //return문 내부가 create함수가 생성하는 스토어이다.));
