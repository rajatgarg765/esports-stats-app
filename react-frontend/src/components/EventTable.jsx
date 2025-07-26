import React from 'react';

const EventTable = ({ events, isLoading, error }) => {
    if (isLoading) {
        return <p className="p-4 text-center text-[#60758a]">Loading events...</p>;
    }

    if (error) {
        return <p className="p-4 text-center text-red-500">Error: {error}</p>;
    }

    if (events.length === 0) {
        return <p className="p-4 text-center text-[#60758a]">No events found.</p>;
    }

    return (
        <div className="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
            <table className="flex-1">
                <thead>
                    <tr className="bg-white">
                        <th className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Event</th>
                        <th className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Date</th>
                        <th className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-360 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                            Status
                        </th>
                        <th className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-480 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Region</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id} className="border-t border-t-[#dbe0e6]">
                            <td className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                                {event.name}
                            </td>
                            <td className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                                {event.date}
                            </td>
                            <td className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">{event.status}</td>
                            <td className="table-89b2a062-f959-416c-aa37-af359c073fd5-column-480 h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                                {event.region}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style>
                {`
                    @container(max-width:120px){.table-89b2a062-f959-416c-aa37-af359c073fd5-column-120{display: none;}}
                    @container(max-width:240px){.table-89b2a062-f959-416c-aa37-af359c073fd5-column-240{display: none;}}
                    @container(max-width:360px){.table-89b2a062-f959-416c-aa37-af359c073fd5-column-360{display: none;}}
                    @container(max-width:480px){.table-89b2a062-f959-416c-aa37-af359c073fd5-column-480{display: none;}}
                `}
            </style>
        </div>
    );
};

export default EventTable;
