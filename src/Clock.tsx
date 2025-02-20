import { useEffect, useState } from "react";

export default function Clock(): JSX.Element
{
    const [time, setTime] = useState<string>("");

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <h1 className="text-2xl font-semibold">{time}</h1>;
}
