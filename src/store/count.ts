// 전역상태를 보관하기 위한 곳
//src/store/count.ts
import { create } from "zustand";

type Store = {
  count: number;
  actions: { increaseOne: () => void; decreaseOne: () => void };
};
//create는 값을 반환하기 까지 함. -> hook으로 사용 가능
export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
    increaseOne: () => {
      set((store) => ({
        count: store.count + 1,
      }));
    },
    decreaseOne: () => {
      set((store) => ({
        count: store.count - 1,
      }));
    },
  },
})); //return문 내부가 create함수가 생성하는 스토어이다.));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};
export const usedecreasCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};
export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};
