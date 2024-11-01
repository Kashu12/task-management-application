import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Pro Manage</h2>
                <nav>
                    <ul>
                        <li>Board</li>
                        <li>Analytics</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <button className="logout-button">Log out</button>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="header">
                    <h2>Welcome! Kumar</h2>
                    <span>12th Jan, 2024</span>
                </header>

                <div className="board">
                    <div className="board-column">
                        <h3>Backlog</h3>
                        <div className="add-task">+</div>
                    </div>
                    <div className="board-column">
                        <h3>To do</h3>
                        <div className="add-task">+</div>
                    </div>
                    <div className="board-column">
                        <h3>In progress</h3>
                        <div className="add-task">+</div>
                    </div>
                    <div className="board-column">
                        <h3>Done</h3>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
