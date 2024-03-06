class Meeting {
    time;
    day;
    name;
    contractor;
    constructor(time: string, day: string, name: string, contractor: string) {
        this.time = time;
        this.day = day;
        this.name = name;
        this.contractor = contractor;
    }
}

function createMeeting(): Meeting[] {
    return [
        new Meeting('10:00', 'Wtorek', 'Spotkanie z klientem', 'Jan Kowalski'),
        new Meeting('11:00', 'Wtorek', 'Spotkanie z klientem', 'Mietek Kowalski'),
        new Meeting('12:00', 'Czwartek', 'Spotkanie z klientem', 'Gracjan Kowalski'),
        new Meeting('13:00', 'Środa', 'Spotkanie z klientem', 'Grażyna'),
    ];
}

function meetingDisplay(meetings : Meeting[]) {
    const daysOfTheWeek = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
    const meetingTableContainer = document.getElementById('meetingTableContainer');
    const table = document.createElement('table');

    const heading = ['Godzina', ...daysOfTheWeek];
    const headingRow = table.insertRow();
    heading.forEach((heading) => {
        const th = document.createElement('th');
        th.textContent = heading;
        headingRow.appendChild(th);
    });

    for (let hour = 8; hour < 18; hour++) {
        const row = table.insertRow();
        const hourCell = row.insertCell();
        hourCell.textContent = `${hour}:00`;

        for (const day of daysOfTheWeek) {
            const currentMeeting = meetings.find(
                (meeting : Meeting) => meeting.day === day && meeting.time === `${hour}:00`
            );
            const cell = row.insertCell();
            cell.textContent = currentMeeting
                ? `${currentMeeting.name} ${currentMeeting.contractor}`
                : 'Brak spotkania';
        }
    }
    if (meetingTableContainer) {
        meetingTableContainer.appendChild(table)
    }
    // meetingTableContainer!.appendChild(table);
}

meetingDisplay(createMeeting());
