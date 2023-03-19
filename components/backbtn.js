import { useRouter } from "next/router";

const BackBtn = () => {
  const router = useRouter();

  return <button onClick={() => router.back()}>Back</button>;
};

export default BackBtn;
