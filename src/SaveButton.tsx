import { FormattedMessage } from "react-intl";

interface SaveButtonProps
{
    saveTime: () => void;
}

export default function SaveButton({ saveTime }: SaveButtonProps): JSX.Element
{
    return (
        <button
            onClick={saveTime}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md"
        >
            <FormattedMessage id="save_button" />
        </button>
    );
}
