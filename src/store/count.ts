// 전역상태를 보관하기 위한 곳
//src/store/count.ts
import { create } from "zustand";
import {
  combine,
  persist,
  subscribeWithSelector,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            count: 0,
            actions: {
              increaseOne: () => {
                set((state) => {
                  state.count += 1;
                });
              },
              decreaseOne: () => {
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countStore", //문제 발생 - store의 값이 로컬스토리지에 보관되기는 하나 store.actions의 값이 빈값으로 저장됨 -> 새로고침, 버튼 클릭이 먹통이 되어 버리기 때문에 이를 해결하기 위해 partialize라는 selector함수를 활용하여
        //원하는 값만 로컬 스토리지에 보관할 수 있도록 해줘야 함.
        //partialize
        partialize: (store) => ({
          count: store.count,
        }),
        //스토리지의 내용을 세션스토리지에 저장한다.
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: "countStore" },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  //Listener 선택된 값이 바뀔 때 마다 실행되는 함수
  (count, prevCount) => {
    console.log(count, prevCount);
    //1. 현재 count 스토어의 값 불러오기
    const store = useCountStore.getState();
    console.log("현재 스토어의 값은", store);
  },
);

//create는 값을 반환하기 까지 함. -> hook으로 사용 가능
// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increaseOne: () => {
//       set((state) => ({
//         count: state.count + 1,
//       }));
//     },
//     decreaseOne: () => {
//       set((state) => ({
//         count: state.count - 1,
//       }));
//     },
//   },
// }));
//  //return문 내부가 create함수가 생성하는 스토어이다.));

//! zustand를 활용할 때 커스텀 훅으로 감싸서 사용하는 게 혹시 내부에서 수정사항이 생겼을 때 해당 파일 내부에서만 수정하면 되기 때문에 훨씬 안정적이라고 볼 수 있다.
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
