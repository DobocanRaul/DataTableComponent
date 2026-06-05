import './App.css'
import {DataTable} from './component/dataTable'

function App() {
  const tableData= [
  {
    "id": 102,
    "name": "Alice Wonderland",
    "department": "Engineering",
    "role": "Frontend Developer",
    "isActive": true,
    "salary": 85000,
    "lastLogin": "2023-10-24T08:30:00Z"
  },
  {
    "id": 101,
    "name": "Bob Builder",
    "department": "Operations",
    "role": "Project Manager",
    "isActive": true,
    "salary": 92000,
    "lastLogin": "2023-10-23T14:15:00Z"
  },
  {
    "id": 103,
    "name": "Charlie Chaplin",
    "department": "Marketing",
    "role": "Content Strategist",
    "isActive": false,
    "salary": 78000,
    "lastLogin": "2023-09-15T09:00:00Z"
  },
  {
    "id": 104,
    "name": "Diana Prince",
    "department": "Engineering",
    "role": "Security Engineer",
    "isActive": true,
    "salary": 115000,
    "lastLogin": "2023-10-24T07:45:00Z"
  },
  {
    "id": 105,
    "name": "Evan Wright",
    "department": "Sales",
    "role": "Account Executive",
    "isActive": true,
    "salary": 65000,
    "lastLogin": "2023-10-22T16:20:00Z"
  },
  {
    "id": 106,
    "name": "Fiona Green",
    "department": "HR",
    "role": "HR Manager",
    "isActive": true,
    "salary": 72000,
    "lastLogin": "2023-10-24T09:10:00Z"
  },
  {
    "id": 107,
    "name": "George Miller",
    "department": "Engineering",
    "role": "Backend Developer",
    "isActive": true,
    "salary": 95000,
    "lastLogin": "2023-10-24T10:30:00Z"
  },
  {
    "id": 108,
    "name": "Hannah Lee",
    "department": "Marketing",
    "role": "Social Media Manager",
    "isActive": false,
    "salary": 58000,
    "lastLogin": "2023-10-10T15:45:00Z"
  },
  {
    "id": 109,
    "name": "Isaac Newton",
    "department": "Research",
    "role": "Data Scientist",
    "isActive": true,
    "salary": 105000,
    "lastLogin": "2023-10-24T11:20:00Z"
  },
  {
    "id": 110,
    "name": "Julia Roberts",
    "department": "Sales",
    "role": "Sales Lead",
    "isActive": true,
    "salary": 88000,
    "lastLogin": "2023-10-23T13:00:00Z"
  },
  {
    "id": 111,
    "name": "Kevin Hart",
    "department": "Operations",
    "role": "Operations Specialist",
    "isActive": true,
    "salary": 68000,
    "lastLogin": "2023-10-24T08:00:00Z"
  },
  {
    "id": 112,
    "name": "Laura Palmer",
    "department": "Engineering",
    "role": "DevOps Engineer",
    "isActive": false,
    "salary": 110000,
    "lastLogin": "2023-10-01T17:30:00Z"
  },
  {
    "id": 113,
    "name": "Michael Scott",
    "department": "Management",
    "role": "Director",
    "isActive": true,
    "salary": 150000,
    "lastLogin": "2023-10-24T07:00:00Z"
  },
  {
    "id": 114,
    "name": "Natalie Wood",
    "department": "Design",
    "role": "UX Designer",
    "isActive": true,
    "salary": 82000,
    "lastLogin": "2023-10-23T16:45:00Z"
  },
  {
    "id": 115,
    "name": "Oliver Stone",
    "department": "Legal",
    "role": "Legal Counsel",
    "isActive": true,
    "salary": 125000,
    "lastLogin": "2023-10-22T09:30:00Z"
  },
  {
    "id": 116,
    "name": "Patricia Hill",
    "department": "Finance",
    "role": "Financial Analyst",
    "isActive": true,
    "salary": 75000,
    "lastLogin": "2023-10-24T10:15:00Z"
  },
  {
    "id": 117,
    "name": "Quinn Adams",
    "department": "Research",
    "role": "Researcher",
    "isActive": false,
    "salary": 70000,
    "lastLogin": "2023-09-30T14:00:00Z"
  },
  {
    "id": 118,
    "name": "Ryan Gosling",
    "department": "Engineering",
    "role": "Full Stack Developer",
    "isActive": true,
    "salary": 98000,
    "lastLogin": "2023-10-24T12:00:00Z"
  },
  {
    "id": 119,
    "name": "Sarah Connor",
    "department": "Sales",
    "role": "Sales Representative",
    "isActive": true,
    "salary": 62000,
    "lastLogin": "2023-10-23T11:30:00Z"
  },
  {
    "id": 120,
    "name": "Thomas Anderson",
    "department": "IT",
    "role": "IT Support",
    "isActive": true,
    "salary": 55000,
    "lastLogin": "2023-10-24T08:45:00Z"
  },
  {
    "id": 121,
    "name": "Ursula Blake",
    "department": "Marketing",
    "role": "Marketing Manager",
    "isActive": true,
    "salary": 85000,
    "lastLogin": "2023-10-24T09:50:00Z"
  },
  {
    "id": 122,
    "name": "Vincent Price",
    "department": "Operations",
    "role": "Logistics Manager",
    "isActive": false,
    "salary": 80000,
    "lastLogin": "2023-10-05T10:20:00Z"
  },
  {
    "id": 123,
    "name": "Wendy Wilson",
    "department": "Design",
    "role": "Graphic Designer",
    "isActive": true,
    "salary": 70000,
    "lastLogin": "2023-10-24T13:30:00Z"
  },
  {
    "id": 124,
    "name": "Xavier Lopez",
    "department": "Engineering",
    "role": "QA Engineer",
    "isActive": true,
    "salary": 78000,
    "lastLogin": "2023-10-23T15:00:00Z"
  },
  {
    "id": 125,
    "name": "Yara Martinez",
    "department": "HR",
    "role": "Recruiter",
    "isActive": true,
    "salary": 60000,
    "lastLogin": "2023-10-24T11:45:00Z"
  }
]

  const tableHeaders = [
    { text:"ID",name: "id", width: "80px" },
    { text:"Full Name",name: "name", width: "150px" },
    { text:"Department",name: "department", width: "120px" },
    { text:"Role",name: "role", width: "150px" },
    { text:"Employed",name: "isActive", width: "100px" },
    { text:"Salary",name: "salary", width: "100px" },
    { text:"Last login",name: "lastLogin", width: "150px" }
  ]

  const paginationOptions = [5, 10, 15];

  return (
    <>
      <section id="center">
        <DataTable 
          data={tableData} 
          tableHeaders={tableHeaders} 
          paginationOptions={paginationOptions}>
        </DataTable>
      </section>
    </>
  )
}

export default App
