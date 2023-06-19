import React from "react";

interface DashboardProps {
    onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
    const handleLogout = () => {
        onLogout();
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button type="button" onClick={handleLogout}>Log out</button>
        </>
    )
}

export default Dashboard;