import Header from "ui/Header/Header.tsx";
import classes from './Configuration.module.scss'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store.tsx";
import { Toggle } from "forms/Toggle.tsx";

interface Settings {
    isDark: boolean;
    isNotified: boolean;
    isAnimated: boolean;
}

const Configuration = () => {
    const userData = useSelector((state: RootState) => state.userData);

    const handleToggleChange = (key: keyof Settings, value: boolean) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const [settings, setSettings] = useState<Settings>({
        isDark: localStorage.getItem("isDark") !== 'false', // Zmienione tutaj
        isNotified: localStorage.getItem("isNotified") !== 'false', // Zmienione tutaj
        isAnimated: localStorage.getItem("isAnimated") !== 'false' // Zmienione tutaj
    });


    useEffect(() => {
        Object.keys(settings).forEach((key) => {
            const typedKey = key as keyof Settings;
            if (localStorage.getItem(typedKey) !== JSON.stringify(settings[typedKey])) {
                handleToggleChange(typedKey, settings[typedKey]);
            }
        });
    }, [settings]);

    return (
        <main className={classes.home}>
            <Header value={'Account'}>
                <div className={classes.account}>
                    <div className={classes.account__info}>
                        <h2>First Name: {userData.personalInfo.firstName ?? "N/A"}</h2>
                        <h2>Last Name: {userData.personalInfo.lastName ?? "N/A"}</h2>
                        <h2>City: {userData.personalInfo.city ?? "N/A"}</h2>
                        <h2>Street: {userData.personalInfo.street ?? "N/A"}</h2>
                        <h2>
                            <strong>Address:</strong> {userData.personalInfo.homeNumber ?? "N/A"}{userData.personalInfo.flatNumber ? `/${userData.personalInfo.flatNumber}` : ""}
                        </h2>
                    </div>
                </div>
            </Header>
            <Header value={'Look & Feel'}>
                <Toggle
                    id={"dark-mode"}
                    onChange={() => {
                        setSettings(prev => ({ ...prev, isDark: !prev.isDark }));
                        window.location.reload();
                    }}
                    checked={settings.isDark}
                    labelText={"Dark Mode"}
                />

                <Toggle id={"animations"} onChange={() => {
                    setSettings(prev => ({...prev, isAnimated: !prev.isAnimated}))
                    window.location.reload()
                }} checked={settings.isAnimated} labelText={"Animations"} />
            </Header>
            <Header value={'Notifications'}>
                <Toggle id={"notifications"} onChange={() => setSettings(prev => ({ ...prev, isNotified: !prev.isNotified }))} checked={settings.isNotified} labelText={"Notifications"} />
            </Header>
        </main>
    );
};

export default Configuration;
