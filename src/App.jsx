// // import { useState } from "react";
// // import { CheckCircleIcon, XCircleIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/solid";
// // import clsx from "clsx";
// // import Calendar from "react-calendar";
// // import "react-calendar/dist/Calendar.css";


// // const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
// // const statusColors = {
// //   "✅ Prayed": "bg-green-500",
// //   "❌ Missed": "bg-red-500",
// //   "🟡 Late": "bg-yellow-500",
// //   "🔵 Jama’ah": "bg-blue-500",
// // };
// // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// // const PrayerStatusSelector = ({ prayer, selectedStatus, onChange }) => {
// //   return (
// //     <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow">
// //       <span className="text-sm font-medium text-gray-600">{prayer}</span>
// //       <select
// //         className="border rounded-lg p-2 w-full bg-gray-100 text-gray-700 focus:ring focus:ring-blue-300"
// //         value={selectedStatus[prayer] || ""}
// //         onChange={(e) => onChange(prayer, e.target.value)}
// //       >
// //         <option value="">Select</option>
// //         {Object.keys(statusColors).map((label) => (
// //           <option key={label} value={label}>{label}</option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// // };

// // const PrayerTrackerEntry = ({ entry, onEdit, onDelete }) => {
// //   return (
// //     <div className="flex flex-col items-center p-2 border rounded-lg bg-white shadow">
// //       <span className="text-sm font-semibold text-gray-700">Day {entry.day}</span>
// //       <div className="grid grid-cols-5 gap-1 mt-2">
// //         {prayerNames.map((prayer) => (
// //           <div
// //             key={prayer}
// //             className={clsx("w-6 h-6 rounded", statusColors[entry.prayers[prayer]] || "bg-gray-300")}
// //             title={`${prayer}: ${entry.prayers[prayer] || "Not Selected"}`}
// //           ></div>
// //         ))}
// //       </div>
// //       <div className="mt-2 flex space-x-2">
// //         <button
// //           className="text-blue-500 hover:text-blue-700"
// //           onClick={() => onEdit(entry)}
// //         >
// //           Edit
// //         </button>
// //         <button
// //           className="text-red-500 hover:text-red-700"
// //           onClick={() => onDelete(entry)}
// //         >
// //           Delete
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const NamazTracker = () => {
// //   const [tracker, setTracker] = useState({});
// //   const [selectedStatus, setSelectedStatus] = useState({});
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [editEntry, setEditEntry] = useState(null);

// //   const handleAddOrUpdateEntry = (month, day) => {
// //     const newEntry = {
// //       day: day || (tracker[month]?.length || 0) + 1,
// //       prayers: { ...selectedStatus }
// //     };
// //     if (editEntry) {
// //       const updatedEntries = tracker[month].map((entry) =>
// //         entry.day === editEntry.day ? newEntry : entry
// //       );
// //       setTracker({
// //         ...tracker,
// //         [month]: updatedEntries
// //       });
// //       setEditEntry(null);
// //     } else {
// //       setTracker({
// //         ...tracker,
// //         [month]: [...(tracker[month] || []), newEntry]
// //       });
// //     }
// //     setSelectedStatus({});
// //   };

// //   const handleDeleteEntry = (month, entry) => {
// //     const updatedEntries = tracker[month].filter((e) => e.day !== entry.day);
// //     setTracker({
// //       ...tracker,
// //       [month]: updatedEntries
// //     });
// //   };

// //   const handlePrint = (month) => {
// //     const printContent = tracker[month]?.map((entry) => (
// //       `<div class="print-entry">
// //         <span>Day ${entry.day}</span>
// //         <div class="prayers">
// //           ${prayerNames.map((prayer) => (
// //             `<div class="prayer ${statusColors[entry.prayers[prayer]] || "bg-gray-300"}">
// //               ${prayer}: ${entry.prayers[prayer] || "Not Selected"}
// //             </div>`
// //           )).join("")}
// //         </div>
// //       </div>`
// //     )).join("");
// //     const printWindow = window.open("", "_blank");
// //     printWindow.document.write(`
// //       <html>
// //         <head>
// //           <title>${month} Prayer Tracker</title>
// //           <style>
// //             .print-entry { margin-bottom: 20px; }
// //             .prayers { display: flex; gap: 10px; }
// //             .prayer { padding: 5px; border-radius: 4px; }
// //           </style>
// //         </head>
// //         <body>${printContent}</body>
// //       </html>
// //     `);
// //     printWindow.document.close();
// //     printWindow.print();
// //   };

// //   return (
// //     <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
// //       <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Namaz Yearly Tracker</h2>
      
// //       <p className="text-gray-600 text-center mb-4">Uses a grid layout with small colored blocks for tracking prayers.<br />Displays each day with color-coded status indicators.<br />Allows users to select and add prayer statuses dynamically.</p>
      
// //       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
// //         <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Status for Prayers</h3>
// //         <div className="grid grid-cols-5 gap-4">
// //           {prayerNames.map((prayer) => (
// //             <PrayerStatusSelector
// //               key={prayer}
// //               prayer={prayer}
// //               selectedStatus={selectedStatus}
// //               onChange={(prayer, value) => setSelectedStatus({ ...selectedStatus, [prayer]: value })}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-6">
// //         <h3 className="text-xl font-semibold text-gray-700 mb-2">Select Date</h3>
// //         <Calendar
// //           onChange={setSelectedDate}
// //           value={selectedDate}
// //         />
// //       </div>

// //       {months.map((month) => (
// //         <div key={month} className="mb-6">
// //           <h3 className="text-xl font-semibold text-gray-700 mb-2">{month}</h3>
// //           <button
// //             className="mb-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
// //             onClick={() => handleAddOrUpdateEntry(month, selectedDate.getDate())}
// //           >
// //             {editEntry ? "Update Entry" : "Add Entry"} for {month}
// //           </button>
// //           <button
// //             className="mb-2 ml-2 bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600"
// //             onClick={() => handlePrint(month)}
// //           >
// //             Print {month} Record
// //           </button>
// //           <div className="grid grid-cols-7 gap-2 overflow-x-auto p-4 border rounded-lg bg-gray-100">
// //             {(tracker[month] || []).map((entry, index) => (
// //               <PrayerTrackerEntry
// //                 key={index}
// //                 entry={entry}
// //                 onEdit={() => {
// //                   setSelectedStatus(entry.prayers);
// //                   setEditEntry(entry);
// //                 }}
// //                 onDelete={() => handleDeleteEntry(month, entry)}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default NamazTracker;



// ////////////////////////////
// ///////////////////////////////////

// ///////////////////////
// // import { useState } from "react";
// // import { CheckCircleIcon, XCircleIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/solid";
// // import clsx from "clsx";
// // import Calendar from "react-calendar";
// // import "react-calendar/dist/Calendar.css";

// // const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
// // const statusColors = {
// //   "✅ Prayed": "bg-green-500",
// //   "❌ Missed": "bg-red-500",
// //   "🟡 Late": "bg-yellow-500",
// //   "🔵 Jama’ah": "bg-blue-500",
// // };
// // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// // const PrayerStatusSelector = ({ prayer, selectedStatus, onChange }) => {
// //   return (
// //     <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow">
// //       <span className="text-sm font-medium text-gray-600">{prayer}</span>
// //       <select
// //         className="border rounded-lg p-2 w-full bg-gray-100 text-gray-700 focus:ring focus:ring-blue-300"
// //         value={selectedStatus[prayer] || ""}
// //         onChange={(e) => onChange(prayer, e.target.value)}
// //       >
// //         <option value="">Select</option>
// //         {Object.keys(statusColors).map((label) => (
// //           <option key={label} value={label}>{label}</option>
// //         ))}
// //       </select>
// //     </div>
// //   );
// // };

// // const PrayerTrackerEntry = ({ entry, onEdit, onDelete }) => {
// //   return (
// //     <div className="flex flex-col items-center p-2 border rounded-lg bg-white shadow">
// //       <span className="text-sm font-semibold text-gray-700">Day {entry.day}</span>
// //       <div className="grid grid-cols-5 gap-1 mt-2">
// //         {prayerNames.map((prayer) => (
// //           <div
// //             key={prayer}
// //             className={clsx("w-6 h-6 rounded", statusColors[entry.prayers[prayer]] || "bg-gray-300")}
// //             title={`${prayer}: ${entry.prayers[prayer] || "Not Selected"}`}
// //           ></div>
// //         ))}
// //       </div>
// //       <div className="mt-2 flex space-x-2">
// //         <button
// //           className="text-blue-500 hover:text-blue-700"
// //           onClick={() => onEdit(entry)}
// //         >
// //           Edit
// //         </button>
// //         <button
// //           className="text-red-500 hover:text-red-700"
// //           onClick={() => onDelete(entry)}
// //         >
// //           Delete
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const NamazTracker = () => {
// //   const [tracker, setTracker] = useState({});
// //   const [selectedStatus, setSelectedStatus] = useState({});
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [editEntry, setEditEntry] = useState(null);
// //   const [visibleWeeks, setVisibleWeeks] = useState(1); // Show 1 week initially

// //   const handleAddOrUpdateEntry = (month, day) => {
// //     const newEntry = {
// //       day: day || (tracker[month]?.length || 0) + 1,
// //       prayers: { ...selectedStatus }
// //     };
// //     if (editEntry) {
// //       const updatedEntries = tracker[month].map((entry) =>
// //         entry.day === editEntry.day ? newEntry : entry
// //       );
// //       setTracker({
// //         ...tracker,
// //         [month]: updatedEntries
// //       });
// //       setEditEntry(null);
// //     } else {
// //       setTracker({
// //         ...tracker,
// //         [month]: [...(tracker[month] || []), newEntry]
// //       });
// //     }
// //     setSelectedStatus({});
// //   };

// //   const handleDeleteEntry = (month, entry) => {
// //     const updatedEntries = tracker[month].filter((e) => e.day !== entry.day);
// //     setTracker({
// //       ...tracker,
// //       [month]: updatedEntries
// //     });
// //   };

// //   const handlePrint = (month) => {
// //     const printContent = tracker[month]?.map((entry) => (
// //       `<div class="print-entry">
// //         <span>Day ${entry.day}</span>
// //         <div class="prayers">
// //           ${prayerNames.map((prayer) => (
// //             `<div class="prayer ${statusColors[entry.prayers[prayer]] || "bg-gray-300"}">
// //               ${prayer}: ${entry.prayers[prayer] || "Not Selected"}
// //             </div>`
// //           )).join("")}
// //         </div>
// //       </div>`
// //     )).join("");
// //     const printWindow = window.open("", "_blank");
// //     printWindow.document.write(`
// //       <html>
// //         <head>
// //           <title>${month} Prayer Tracker</title>
// //           <style>
// //             .print-entry { margin-bottom: 20px; }
// //             .prayers { display: flex; gap: 10px; }
// //             .prayer { padding: 5px; border-radius: 4px; }
// //           </style>
// //         </head>
// //         <body>${printContent}</body>
// //       </html>
// //     `);
// //     printWindow.document.close();
// //     printWindow.print();
// //   };

// //   const isFutureDate = (date) => {
// //     const today = new Date();
// //     today.setHours(0, 0, 0, 0); // Reset time to compare only dates
// //     return date > today;
// //   };

// //   const getVisibleEntries = (entries, weeks) => {
// //     return entries.slice(0, 7 * weeks); // Show data for the specified number of weeks
// //   };

// //   return (
// //     <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
// //       <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Namaz Yearly Tracker</h2>
      
// //       <p className="text-gray-600 text-center mb-4">Uses a grid layout with small colored blocks for tracking prayers.<br />Displays each day with color-coded status indicators.<br />Allows users to select and add prayer statuses dynamically.</p>
      
// //       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
// //         <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Status for Prayers</h3>
// //         <div className="grid grid-cols-5 gap-4">
// //           {prayerNames.map((prayer) => (
// //             <PrayerStatusSelector
// //               key={prayer}
// //               prayer={prayer}
// //               selectedStatus={selectedStatus}
// //               onChange={(prayer, value) => setSelectedStatus({ ...selectedStatus, [prayer]: value })}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-6">
// //         <h3 className="text-xl font-semibold text-gray-700 mb-2">Select Date</h3>
// //         <Calendar
// //           onChange={setSelectedDate}
// //           value={selectedDate}
// //           maxDate={new Date()} // Disable future dates
// //         />
// //       </div>

// //       {months.map((month) => (
// //         <div key={month} className="mb-6">
// //           <h3 className="text-xl font-semibold text-gray-700 mb-2">{month}</h3>
// //           <button
// //             className="mb-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
// //             onClick={() => handleAddOrUpdateEntry(month, selectedDate.getDate())}
// //             disabled={isFutureDate(selectedDate)} // Disable button for future dates
// //           >
// //             {editEntry ? "Update Entry" : "Add Entry"} for {month}
// //           </button>
// //           <button
// //             className="mb-2 ml-2 bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600"
// //             onClick={() => handlePrint(month)}
// //           >
// //             Print {month} Record
// //           </button>
// //           <div className="grid grid-cols-7 gap-2 overflow-x-auto p-4 border rounded-lg bg-gray-100">
// //             {getVisibleEntries(tracker[month] || [], visibleWeeks).map((entry, index) => (
// //               <PrayerTrackerEntry
// //                 key={index}
// //                 entry={entry}
// //                 onEdit={() => {
// //                   setSelectedStatus(entry.prayers);
// //                   setEditEntry(entry);
// //                 }}
// //                 onDelete={() => handleDeleteEntry(month, entry)}
// //               />
// //             ))}
// //           </div>
// //           {(tracker[month] || []).length > 7 * visibleWeeks && (
// //             <button
// //               className="mt-2 bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400"
// //               onClick={() => setVisibleWeeks(visibleWeeks + 1)}
// //             >
// //               Show More
// //             </button>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default NamazTracker;




// import { useState } from "react";
// import { CheckCircleIcon, XCircleIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/solid";
// import clsx from "clsx";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
// const statusColors = {
//   "✅ Prayed": "bg-green-500",
//   "❌ Missed": "bg-red-500",
//   "🟡 Late": "bg-yellow-500",
//   "🔵 Jama’ah": "bg-blue-500",
// };
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// const PrayerStatusSelector = ({ prayer, selectedStatus, onChange }) => {
//   return (
//     <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow">
//       <span className="text-sm font-medium text-gray-600">{prayer}</span>
//       <select
//         className="border rounded-lg p-2 w-full bg-gray-100 text-gray-700 focus:ring focus:ring-blue-300"
//         value={selectedStatus[prayer] || ""}
//         onChange={(e) => onChange(prayer, e.target.value)}
//       >
//         <option value="">Select</option>
//         {Object.keys(statusColors).map((label) => (
//           <option key={label} value={label}>{label}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const PrayerTrackerEntry = ({ entry, onEdit, onDelete }) => {
//   return (
//     <div className="flex flex-col items-center p-2 border rounded-lg bg-white shadow">
//       <span className="text-sm font-semibold text-gray-700">Day {entry.day}</span>
//       <div className="grid grid-cols-5 gap-1 mt-2">
//         {prayerNames.map((prayer) => (
//           <div
//             key={prayer}
//             className={clsx("w-6 h-6 rounded", statusColors[entry.prayers[prayer]] || "bg-gray-300")}
//             title={`${prayer}: ${entry.prayers[prayer] || "Not Selected"}`}
//           ></div>
//         ))}
//       </div>
//       <div className="mt-2 flex space-x-2">
//         <button
//           className="text-blue-500 hover:text-blue-700"
//           onClick={() => onEdit(entry)}
//         >
//           Edit
//         </button>
//         <button
//           className="text-red-500 hover:text-red-700"
//           onClick={() => onDelete(entry)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// const NamazTracker = () => {
//   const [tracker, setTracker] = useState({});
//   const [selectedStatus, setSelectedStatus] = useState({});
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [editEntry, setEditEntry] = useState(null);
//   const [visibleWeeks, setVisibleWeeks] = useState(1); // Show 1 week initially
//   const [error, setError] = useState("");

//   const handleAddOrUpdateEntry = (month, day) => {
//     // Validate that all prayer statuses are selected
//     const isAllPrayersSelected = prayerNames.every((prayer) => selectedStatus[prayer]);
//     if (!isAllPrayersSelected) {
//       setError("Please select status for all prayers.");
//       return;
//     }

//     // Check if an entry already exists for the selected date
//     const existingEntry = tracker[month]?.find((entry) => entry.day === day);
//     if (existingEntry && !editEntry) {
//       setError("An entry already exists for this date.");
//       return;
//     }

//     const newEntry = {
//       day,
//       prayers: { ...selectedStatus }
//     };

//     if (editEntry) {
//       const updatedEntries = tracker[month].map((entry) =>
//         entry.day === editEntry.day ? newEntry : entry
//       );
//       setTracker({
//         ...tracker,
//         [month]: updatedEntries
//       });
//       setEditEntry(null);
//     } else {
//       setTracker({
//         ...tracker,
//         [month]: [...(tracker[month] || []), newEntry]
//       });
//     }

//     setSelectedStatus({});
//     setError("");
//   };

//   const handleDeleteEntry = (month, entry) => {
//     const updatedEntries = tracker[month].filter((e) => e.day !== entry.day);
//     setTracker({
//       ...tracker,
//       [month]: updatedEntries
//     });
//   };

//   const handlePrint = (month) => {
//     const printContent = tracker[month]?.map((entry) => (
//       `<div class="print-entry">
//         <span>Day ${entry.day}</span>
//         <div class="prayers">
//           ${prayerNames.map((prayer) => (
//             `<div class="prayer ${statusColors[entry.prayers[prayer]] || "bg-gray-300"}">
//               ${prayer}: ${entry.prayers[prayer] || "Not Selected"}
//             </div>`
//           )).join("")}
//         </div>
//       </div>`
//     )).join("");
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>${month} Prayer Tracker</title>
//           <style>
//             .print-entry { margin-bottom: 20px; }
//             .prayers { display: flex; gap: 10px; }
//             .prayer { padding: 5px; border-radius: 4px; }
//           </style>
//         </head>
//         <body>${printContent}</body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const isFutureDate = (date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Reset time to compare only dates
//     return date > today;
//   };

//   const getVisibleEntries = (entries, weeks) => {
//     return entries.slice(0, 7 * weeks); // Show data for the specified number of weeks
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Namaz Yearly Tracker</h2>
      
//       <p className="text-gray-600 text-center mb-4">Uses a grid layout with small colored blocks for tracking prayers.<br />Displays each day with color-coded status indicators.<br />Allows users to select and add prayer statuses dynamically.</p>
      
//       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Status for Prayers</h3>
//         <div className="grid grid-cols-5 gap-4">
//           {prayerNames.map((prayer) => (
//             <PrayerStatusSelector
//               key={prayer}
//               prayer={prayer}
//               selectedStatus={selectedStatus}
//               onChange={(prayer, value) => setSelectedStatus({ ...selectedStatus, [prayer]: value })}
//             />
//           ))}
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-700 mb-2">Select Date</h3>
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//           maxDate={new Date()} // Disable future dates
//         />
//       </div>

//       {months.map((month) => (
//         <div key={month} className="mb-6">
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">{month}</h3>
//           <div className="flex space-x-2 mb-2">
//             <button
//               className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
//               onClick={() => handleAddOrUpdateEntry(month, selectedDate.getDate())}
//               disabled={isFutureDate(selectedDate)}
//             >
//               Add Entry
//             </button>
//             <button
//               className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600"
//               onClick={() => handlePrint(month)}
//             >
//               Print {month} Record
//             </button>
//           </div>
//           <div className="grid grid-cols-7 gap-2 overflow-x-auto p-4 border rounded-lg bg-gray-100">
//             {getVisibleEntries(tracker[month] || [], visibleWeeks).map((entry, index) => (
//               <PrayerTrackerEntry
//                 key={index}
//                 entry={entry}
//                 onEdit={() => {
//                   setSelectedStatus(entry.prayers);
//                   setEditEntry(entry);
//                 }}
//                 onDelete={() => handleDeleteEntry(month, entry)}
//               />
//             ))}
//           </div>
//           {(tracker[month] || []).length > 7 * visibleWeeks && (
//             <button
//               className="mt-2 bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400"
//               onClick={() => setVisibleWeeks(visibleWeeks + 1)}
//             >
//               Show More
//             </button>
//           )}
//           {visibleWeeks > 1 && (
//             <button
//               className="mt-2 bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400"
//               onClick={() => setVisibleWeeks(visibleWeeks - 1)}
//             >
//               Show Less
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NamazTracker;









import { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const statusColors = {
  "✅ Prayed": "bg-green-500",
  "❌ Missed": "bg-red-500",
  "🟡 Late": "bg-yellow-500",
  "🔵 Jama’ah": "bg-blue-500",
};
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PrayerStatusSelector = ({ prayer, selectedStatus, onChange }) => {
  return (
    <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow">
      <span className="text-sm font-medium text-gray-600">{prayer}</span>
      <select
        className="border rounded-lg p-2 w-full bg-gray-100 text-gray-700 focus:ring focus:ring-blue-300"
        value={selectedStatus[prayer] || ""}
        onChange={(e) => onChange(prayer, e.target.value)}
      >
        <option value="">Select</option>
        {Object.keys(statusColors).map((label) => (
          <option key={label} value={label}>{label}</option>
        ))}
      </select>
    </div>
  );
};

const PrayerTrackerEntry = ({ entry, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col items-center p-2 border rounded-lg bg-white shadow">
      <span className="text-sm font-semibold text-gray-700">Day {entry.day}</span>
      <div className="grid grid-cols-5 gap-1 mt-2">
        {prayerNames.map((prayer) => (
          <div
            key={prayer}
            className={clsx("w-6 h-6 rounded", statusColors[entry.prayers[prayer]] || "bg-gray-300")}
            title={`${prayer}: ${entry.prayers[prayer] || "Not Selected"}`}
          ></div>
        ))}
      </div>
      <div className="mt-2 flex space-x-2">
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => onEdit(entry)}
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onDelete(entry)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const NamazTracker = () => {
  const [tracker, setTracker] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editEntry, setEditEntry] = useState(null);
  const [visibleWeeks, setVisibleWeeks] = useState(1); // Show 1 week initially
  const [error, setError] = useState("");
  const [currentMonth, setCurrentMonth] = useState(months[new Date().getMonth()]);

  useEffect(() => {
    // Update current month when selected date changes
    const month = months[selectedDate.getMonth()];
    setCurrentMonth(month);
  }, [selectedDate]);

  const handleAddOrUpdateEntry = (month, day) => {
    // Validate that at least one prayer status is selected
    const isAtLeastOnePrayerSelected = prayerNames.some((prayer) => selectedStatus[prayer]);
    if (!isAtLeastOnePrayerSelected) {
      setError("Please select status for at least one prayer.");
      return;
    }

    // Check if an entry already exists for the selected date
    const existingEntry = tracker[month]?.find((entry) => entry.day === day);
    if (existingEntry && !editEntry) {
      setError("An entry already exists for this date.");
      return;
    }

    const newEntry = {
      day,
      prayers: { ...selectedStatus }
    };

    if (editEntry) {
      const updatedEntries = tracker[month].map((entry) =>
        entry.day === editEntry.day ? newEntry : entry
      );
      setTracker({
        ...tracker,
        [month]: updatedEntries
      });
      setEditEntry(null);
    } else {
      setTracker({
        ...tracker,
        [month]: [...(tracker[month] || []), newEntry]
      });
    }

    setSelectedStatus({});
    setError("");
  };

  const handleDeleteEntry = (month, entry) => {
    const updatedEntries = tracker[month].filter((e) => e.day !== entry.day);
    setTracker({
      ...tracker,
      [month]: updatedEntries
    });
  };

  const handlePrint = (month) => {
    const printContent = tracker[month]?.map((entry) => (
      `<div class="print-entry">
        <span>Day ${entry.day}</span>
        <div class="prayers">
          ${prayerNames.map((prayer) => (
            `<div class="prayer ${statusColors[entry.prayers[prayer]] || "bg-gray-300"}">
              ${prayer}: ${entry.prayers[prayer] || "Not Selected"}
            </div>`
          )).join("")}
        </div>
      </div>`
    )).join("");
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>${month} Prayer Tracker</title>
          <style>
            .print-entry { margin-bottom: 20px; }
            .prayers { display: flex; gap: 10px; }
            .prayer { padding: 5px; border-radius: 4px; }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const isFutureDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare only dates
    return date > today;
  };

  const getVisibleEntries = (entries, weeks) => {
    return entries.slice(0, 7 * weeks); // Show data for the specified number of weeks
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Namaz Yearly Tracker</h2>
      
      <p className="text-gray-600 text-center mb-4">Uses a grid layout with small colored blocks for tracking prayers.<br />Displays each day with color-coded status indicators.<br />Allows users to select and add prayer statuses dynamically.</p>
      
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Status for Prayers</h3>
        <div className="grid grid-cols-5 gap-4">
          {prayerNames.map((prayer) => (
            <PrayerStatusSelector
              key={prayer}
              prayer={prayer}
              selectedStatus={selectedStatus}
              onChange={(prayer, value) => setSelectedStatus({ ...selectedStatus, [prayer]: value })}
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Select Date</h3>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          maxDate={new Date()} // Disable future dates
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{currentMonth}</h3>
        <div className="flex space-x-2 mb-2">
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => handleAddOrUpdateEntry(currentMonth, selectedDate.getDate())}
            disabled={isFutureDate(selectedDate)}
          >
            {editEntry ? "Update Entry" : "Add Entry"}
          </button>
          <button
            className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600"
            onClick={() => handlePrint(currentMonth)}
          >
            Print {currentMonth} Record
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 overflow-x-auto p-4 border rounded-lg bg-gray-100">
          {getVisibleEntries(tracker[currentMonth] || [], visibleWeeks).map((entry, index) => (
            <PrayerTrackerEntry
              key={index}
              entry={entry}
              onEdit={() => {
                setSelectedStatus(entry.prayers);
                setEditEntry(entry);
              }}
              onDelete={() => handleDeleteEntry(currentMonth, entry)}
            />
          ))}
        </div>
        {(tracker[currentMonth] || []).length > 7 * visibleWeeks && (
          <button
            className="mt-2 bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => setVisibleWeeks(visibleWeeks + 1)}
          >
            Show More
          </button>
        )}
        {visibleWeeks > 1 && (
          <button
            className="mt-2 bg-gray-300 text-gray-700 py-1 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => setVisibleWeeks(visibleWeeks - 1)}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default NamazTracker;




