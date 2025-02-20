import { useEffect, useState } from "react";
import Clock from "./Clock";
import SaveButton from "./SaveButton";
import TimeList from "./TimeList";
import { useLanguage } from "./context/LanguageContext";
import { FormattedMessage } from "react-intl";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function App()
{
    const [savedTimes, setSavedTimes] = useState<string[]>([]);
    const { setLocale } = useLanguage();

    useEffect(() =>
    {
        const savedTimesFromLocalStorage = localStorage.getItem("savedTimes");
        if (savedTimesFromLocalStorage)
        {
            setSavedTimes(JSON.parse(savedTimesFromLocalStorage));
        }
    }, []);

    const saveTime = () =>
    {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        const newSavedTimes = [...savedTimes, formattedTime];
        setSavedTimes(newSavedTimes);
        localStorage.setItem("savedTimes", JSON.stringify(newSavedTimes));
    };

    const deleteTime = (index: number) =>
    {
        const newSavedTimes = savedTimes.filter((_, i) => i !== index);
        setSavedTimes(newSavedTimes);
        localStorage.setItem("savedTimes", JSON.stringify(newSavedTimes));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4">
            <h1 className="text-3xl font-bold text-blue-600">
                <FormattedMessage id="title" />
            </h1>

            {/* Selector de idioma con Headless UI */}
            <Menu as="div" className="relative inline-block text-left mt-4">
                <MenuButton className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
                    <FormattedMessage id="change_language" />
                </MenuButton>
                <MenuItems className="absolute mt-2 w-40 bg-white border rounded-lg shadow-lg">
                    <MenuItem>
                        {({ active }) => (
                            <button
                                className={`block px-4 py-2 w-full text-left ${active ? "bg-gray-200" : ""}`}
                                onClick={() => setLocale("es")}
                            >
                                Español
                            </button>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <button
                                className={`block px-4 py-2 w-full text-left ${active ? "bg-gray-200" : ""}`}
                                onClick={() => setLocale("en")}
                            >
                                English
                            </button>
                        )}
                    </MenuItem>
                </MenuItems>
            </Menu>

            <Clock />
            <SaveButton saveTime={saveTime} />
            <TimeList savedTimes={savedTimes} deleteTime={deleteTime} />
        </div>
    );
}

export default App;
