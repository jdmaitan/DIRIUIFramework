import { useEffect, useState } from "react";

export default function Clock(): JSX.Element
{
    const [time, setTime] = useState<string>("")

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(interval);
    })

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}