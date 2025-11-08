import { useCountStore } from "@/store/count";
import { Button } from "@/components/ui/button";
export default function Controller() {
  const actions = useCountStore((store) => store.actions);
  //   const store = useCountStore(); 를 구조분해한 결과

  return (
    <>
      {/* <Button onClick={decrease}>-</Button> */}
      <Button onClick={actions.decrease}>-</Button>
      <Button onClick={actions.increase}>+</Button>
    </>
  );
}
