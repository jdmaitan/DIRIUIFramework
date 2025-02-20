import { FormattedMessage } from "react-intl";

interface TimeListProps
{
    savedTimes: string[];
    deleteTime: (index: number) => void;
}

export default function TimeList({ savedTimes, deleteTime }: TimeListProps): JSX.Element
{
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold">
                <FormattedMessage id="saved_times" />
            </h2>
            <ul className="mt-2 space-y-2">
                {savedTimes.map((time, index) => (
                    <li key={index} className="flex items-center space-x-4">
                        <span className="text-lg">{time}</span>
                        <button
                            onClick={() => deleteTime(index)}
                            className="px-2 py-1 bg-red-500 text-white rounded-lg"
                        >
                            <FormattedMessage id="delete_button" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
