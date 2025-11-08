import { useCountStore } from "@/store/count";
import { Button } from "@/components/ui/button";
export default function Controller() {
  const decrease = useCountStore((store) => store.decrease);
  const increase = useCountStore((store) => store.increase);
  //   const store = useCountStore(); 를 구조분해한 결과

  return (
    <>
      {/* <Button onClick={decrease}>-</Button> */}
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </>
  );
}
