import { usedecreasCount, useIncreaseCount } from "@/store/count";
import { Button } from "@/components/ui/button";
export default function Controller() {
  // 변수가 달라질 경우를 대비하여 커스텀 훅으로 변경
  const increase = useIncreaseCount();
  const decrease = usedecreasCount();

  return (
    <>
      {/* <Button onClick={decrease}>-</Button> */}
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </>
  );
}
