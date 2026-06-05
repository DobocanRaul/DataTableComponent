import { useState } from 'react';
import './dataTable.css';

export {DataTable};

interface TableHeader {
    text:string,
  name: string;
  width?: string;
}

type SearchOperator = 'contains' | 'equals' | 'startsWith';

interface SearchCriteria {
  field: string;
  operator: SearchOperator;
  value: string;
}

function DataTable( {data, tableHeaders, paginationOptions} : {data:Object[], tableHeaders:TableHeader[], paginationOptions: number[]}){
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(paginationOptions[0] || 10);
    const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
        field: tableHeaders[0]?.name || '',
        operator: 'contains',
        value: ''
    });

    const handleColumnClick = (column: TableHeader) => {
        if (sortColumn === column.name) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column.name);
            setSortOrder('asc');
        }
    };

    const filteredData = data.filter(row => {
        if (!searchCriteria.value) return true;

        const fieldValue = String((row as any)[searchCriteria.field] ?? '').toLowerCase();
        const searchValue = searchCriteria.value.toLowerCase();

        switch (searchCriteria.operator) {
            case 'contains':
                return fieldValue.includes(searchValue);
            case 'equals':
                return fieldValue === searchValue;
            case 'startsWith':
                return fieldValue.startsWith(searchValue);
            default:
                return true;
        }
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortColumn) return 0;

        const aValue = (a as any)[sortColumn];
        const bValue = (b as any)[sortColumn];

        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return sortOrder === 'asc' ? 1 : -1;
        if (bValue == null) return sortOrder === 'asc' ? -1 : 1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            const comparison = aValue.localeCompare(bValue);
            return sortOrder === 'asc' ? comparison : -comparison;
        }

        if (aValue > bValue) {
            return sortOrder === 'asc' ? 1 : -1;
        } else if (aValue < bValue) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        return 0;
    });

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = sortedData.slice(startIndex, endIndex);

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleSearchFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchCriteria({ ...searchCriteria, field: e.target.value });
        setCurrentPage(1);
    };

    const handleSearchOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchCriteria({ ...searchCriteria, operator: e.target.value as SearchOperator });
        setCurrentPage(1);
    };

    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCriteria({ ...searchCriteria, value: e.target.value });
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchCriteria({ field: tableHeaders[0]?.name || '', operator: 'contains', value: '' });
        setCurrentPage(1);
    };

    return <div className="datatable-wrapper">
        {/* Search Bar */}
        <div className="datatable-search-bar">
            <label htmlFor="searchField" className="datatable-search-label">Search:</label>
            
            <select 
                id="searchField"
                className="datatable-search-field"
                value={searchCriteria.field}
                onChange={handleSearchFieldChange}
            >
                {tableHeaders.map(header => (
                    <option key={header.name} value={header.name}>{header.text}</option>
                ))}
            </select>

            <select 
                className="datatable-search-field"
                value={searchCriteria.operator}
                onChange={handleSearchOperatorChange}
            >
                <option value="contains">Contains</option>
                <option value="equals">Equals</option>
                <option value="startsWith">Starts with</option>
            </select>

            <input 
                type="text"
                className="datatable-search-input"
                placeholder="Search value..."
                value={searchCriteria.value}
                onChange={handleSearchValueChange}
            />

            {searchCriteria.value && (
                <button 
                    className="datatable-search-clear-btn"
                    onClick={handleClearSearch}
                >
                    Clear
                </button>
            )}

            <div className="datatable-search-results">
                Results: {sortedData.length}
            </div>
        </div>
        {/* Table */}
        <div className="datatable-table-container">
        <table>
        <thead>
            <tr>
                {tableHeaders.map(header =>
                    <th 
                        key={header.name}
                        className="datatable-th-cell"
                        onClick={() => handleColumnClick(header)}
                        style={{ width: header.width }}
                        title="Click to sort"
                    >
                        {header.text} {sortColumn === header.name && (sortOrder === 'asc' ? '▲' : '▼')}
                    </th>
                )}
            </tr>
        </thead>
        <tbody>
            {paginatedData.map((row, rowIndex) =>
                <tr key={rowIndex}>
                    {tableHeaders.map(header =>
                        <td key={`${rowIndex}-${header.name}`} style={{ width: header.width }}>
                            {String((row as any)[header.name] ?? "")}
                        </td>
                    )}
                </tr>
            )}
        </tbody>
    </table>
        </div>

    {/*Pagination*/}
    <div className="datatable-pagination">
        <div className="datatable-pagination-left">
            <label htmlFor="itemsPerPage">Items per page:</label>
            <select 
                id="itemsPerPage"
                className="datatable-search-field"
                value={itemsPerPage} 
                onChange={handleItemsPerPageChange}
            >
                {paginationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>

        <div className="datatable-pagination-center">
            <button 
                className="datatable-pagination-btn"
                onClick={handlePreviousPage} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            
            <span className="datatable-pagination-info">
                Page {currentPage} of {totalPages}
            </span>

            <button 
                className="datatable-pagination-btn"
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>

        <div className="datatable-pagination-right">
            Showing {paginatedData.length} of {sortedData.length} results
        </div>
    </div>
</div>
}