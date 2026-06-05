# DataTable Component Documentation

## Overview

The **DataTable** component is a React table component built with TypeScript. It provides sorting, pagination, customizable column widths, and a clean, responsive, modern UI with rounded corners and delimited cells.

## Features

**Column Sorting** - Click column headers to sort ascending/descending

**Search & Filter** - Filter data by field with operators (contains, equals, starts with)

**Pagination** - Customizable items per page with dropdown selector

**Column Width Customization** - Set custom widths for each column

**Responsive Design** - Modern styling with rounded corners and hover effects

**Smart Data Handling** - Works with strings, numbers, booleans, dates, and null values

**Accessible** - Includes keyboard support and proper ARIA attributes

## Props

### DataTable Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `data` | `Object[]` | Yes | Array of data objects to display in the table |
| `tableHeaders` | `TableHeader[]` | Yes | Array of header definitions |
| `paginationOptions` | `number[]` | Yes | Array of pagination options (e.g., `[5, 10, 15, 20]`) |

### TableHeader Interface

```typescript
interface TableHeader {
  name: string;      // Key name in data object (used for sorting and cell value lookup)
  text: string;      // Display text shown in column header
  width?: string;    // Optional CSS width (e.g., "150px", "20%")
}
```

## Usage Example

### Basic Setup

```typescript
import { DataTable } from './component/dataTable';

function App() {
  // Sample data
  const tableData = [
    {
      id: 101,
      name: "Alice Wonderland",
      department: "Engineering",
      role: "Frontend Developer",
      isActive: true,
      salary: 85000,
      lastLogin: "2023-10-24T08:30:00Z"
    },
    {
      id: 102,
      name: "Bob Builder",
      department: "Operations",
      role: "Project Manager",
      isActive: true,
      salary: 92000,
      lastLogin: "2023-10-23T14:15:00Z"
    },
    // ... more data
  ];

  // Define table columns
  const tableHeaders = [
    { name: "id", text: "ID", width: "80px" },
    { name: "name", text: "Name", width: "150px" },
    { name: "department", text: "Department", width: "120px" },
    { name: "role", text: "Role", width: "150px" },
    { name: "isActive", text: "Active", width: "100px" },
    { name: "salary", text: "Salary", width: "100px" },
    { name: "lastLogin", text: "Last Login", width: "150px" }
  ];

  // Pagination options
  const paginationOptions = [5, 10, 15, 20];

  return (
    <DataTable 
      data={tableData} 
      tableHeaders={tableHeaders} 
      paginationOptions={paginationOptions}
    />
  );
}

export default App;
```

## Features in Detail

### 1. Column Sorting

- **Click any column header** to sort by that column
- **Click again** to toggle between ascending (▲) and descending (▼) order
- **Smart sorting** handles:
  - Strings (uses locale-aware comparison)
  - Numbers (numeric comparison)
  - Booleans (true/false sorting)
  - Dates (if parseable)
  - Null/undefined values (sorted to the end)

### 2. Search & Filter

- **Multiple Operators**:
  - `Contains` - Finds rows where the field contains the search value
  - `Equals` - Finds exact matches for the search value
  - `Starts with` - Finds rows where the field starts with the search value
- **Field Selection** - Users can choose which column to search in via a dropdown
- **Real-time Filtering** - Results update as you type
- **Case-Insensitive** - Search is case-insensitive 
- **Result Counter** - Shows how many results match the search criteria
- **Clear Button** - Quick way to reset search and see all data
- **Works with Sorting & Pagination** - Search filters data first, then sorting and pagination are applied

### 3. Pagination

- **Items Per Page Dropdown** - Users can select from available pagination options
- **Page Navigation** - Previous/Next buttons to navigate between pages
- **Page Indicator** - Shows current page and total pages (e.g., "Page 2 of 5")
- **Results Counter** - Displays current visible results vs total filtered results
- **Auto-Reset** - Resets to page 1 when search or items per page changes
- **Smart Navigation** - Previous/Next buttons are disabled at edges

### 4. Column Customization

- Set custom widths using CSS units (px, %, em, etc.)
- Table uses `table-layout: fixed` to respect column widths
- Default width if not specified: auto

### 5. Styling

The component includes built-in styling with:
- White background with subtle shadow
- Rounded corners (8px border-radius)
- Delimited cells with light gray borders
- Header background with darker shade
- Hover effects on rows and headers
- Responsive button styling
- Search bar with light gray background

## Data Requirements

### Data Object Structure

Data objects can have any properties. The component will display values based on the `name` field in `TableHeader`:

```typescript
{
  id: 101,                              // Must match a tableHeader.name
  name: "Alice Wonderland",             // Must match a tableHeader.name
  department: "Engineering",            // Must match a tableHeader.name
  role: "Frontend Developer",           // Must match a tableHeader.name
  isActive: true,                       // Must match a tableHeader.name
  salary: 85000,                        // Must match a tableHeader.name
  lastLogin: "2023-10-24T08:30:00Z",    // Must match a tableHeader.name
  // ... additional properties are ignored
}
```

## Styling

All styling is applied via CSS classes. The component uses these CSS selectors:

```css
table { /* Main table styles */ }
th { /* Header cell styles */ }
td { /* Data cell styles */ }
tbody tr:hover { /* Row hover effect */ }
select { /* Dropdown styling */ }
button { /* Button styling */ }
```
## Keyboard Support

- **Tab** - Navigate through interactive elements (headers, dropdown, buttons)
- **Enter/Space** - Activate sorting on headers, change pagination options
- **Arrow Keys** - Navigate dropdown options

## TypeScript Support

The component is fully typed with TypeScript:

```typescript
interface TableHeader {
  name: string;
  text: string;
  width?: string;
}

interface DataTableProps {
  data: Object[];
  tableHeaders: TableHeader[];
  paginationOptions: number[];
}
```

## Performance Considerations

- **Sorting** creates a new sorted array without mutating original data
- **Pagination** slices data efficiently for display
- **Re-renders** are optimized with React hooks

## Examples

### Example 1: Employee Directory

```typescript
const paginationOptions = [10, 25, 50];
const tableHeaders = [
  { name: "id", text: "ID", width: "60px" },
  { name: "name", text: "Employee Name", width: "180px" },
  { name: "department", text: "Department", width: "140px" },
  { name: "salary", text: "Salary", width: "120px" }
];
```

### Example 2: Products Table

```typescript
const paginationOptions = [5, 10, 20, 50];
const tableHeaders = [
  { name: "sku", text: "SKU", width: "100px" },
  { name: "name", text: "Product Name", width: "200px" },
  { name: "price", text: "Price", width: "100px" },
  { name: "stock", text: "In Stock", width: "100px" }
];
```

### Example 3: Transaction Log

```typescript
const paginationOptions = [25, 50, 100];
const tableHeaders = [
  { name: "transactionId", text: "Transaction ID", width: "150px" },
  { name: "date", text: "Date", width: "150px" },
  { name: "amount", text: "Amount", width: "120px" },
  { name: "status", text: "Status", width: "100px" }
];
```

## Search Usage Examples

### Using "Contains" Operator (Default)

Search for any field that contains the search value:
```
Field: "Name"
Operator: "Contains"
Search Value: "alice"
Result: Shows "Alice Wonderland", "Charlie Chaplin" (all rows with names containing "alice")
```

### Using "Equals" Operator

Find exact matches:
```
Field: "Department"
Operator: "Equals"
Search Value: "Engineering"
Result: Shows only rows where department is exactly "Engineering"
```

### Using "Starts With" Operator

Find values that begin with the search term:
```
Field: "Name"
Operator: "Starts with"
Search Value: "Bob"
Result: Shows "Bob Builder" (rows where name starts with "Bob")
```
