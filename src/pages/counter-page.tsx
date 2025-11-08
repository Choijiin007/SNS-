import Controller from "@/components/counter/controller";
import Viewer from "@/components/counter/viewer";

export default function CounterPage() {
  return (
    <div>
      <h1>counter</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
