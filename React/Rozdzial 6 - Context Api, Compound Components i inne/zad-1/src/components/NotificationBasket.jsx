import { useState } from "react";

const NotificationBasket = () => {
    const [notifications, setNotifications] = useState([]);

    const handleNotification = (action) => {
        const newNotification = {
            action,
            time: new Date().toLocaleString(),
        };
        setNotifications([...notifications, newNotification]);
    };

    return (
        <div>
            <button onClick={() => handleNotification('Dodano profil wolontariusza')}>
                Dodaj profil wolontariusza
            </button>
            <button onClick={() => handleNotification('Usunięto profil wolontariusza')}>
                Usuń profil wolontariusza
            </button>
            <button onClick={() => handleNotification('Edytowano profil wolontariusza')}>
                Edytuj profil wolontariusza
            </button>
            <div>Liczba powiadomień: {notifications.length}</div>
            <div>
                {notifications.map((notification, index) => (
                    <div key={index}>
                        {notification.timestamp}: {notification.action}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationBasket