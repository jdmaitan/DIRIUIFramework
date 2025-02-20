interface TimeListProps
{
    savedTimes: string[];
    deleteTime: (index: number) => void;
}

export default function TimeList({ savedTimes, deleteTime }: TimeListProps): JSX.Element
{
    return (
        <div>
            <h2>Lista de tiempos guardados</h2>
            <ul>
                {savedTimes.map((savedTime, index) => (
                    <li key={index}>
                        <b>{savedTime}</b>
                        <button onClick={() => deleteTime(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}