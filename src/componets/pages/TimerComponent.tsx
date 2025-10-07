import { useEffect } from "react";

export default function TimerComponent() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("კომპონენტი ჩახსნილია, მთვლელი კი - გასუფთავებული.");
    };
  }, []);

  return <div>მთვლელი ჩართულია...</div>;
}
