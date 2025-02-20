interface SaveButtonProps
{
    saveTime: () => void
}

export default function SaveButton({ saveTime }: SaveButtonProps): JSX.Element
{
    return (
        <button onClick={saveTime}>Guardar hora</button>
    );
}