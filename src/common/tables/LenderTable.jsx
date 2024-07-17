import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const LenderTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className='w-full text-gray-500 mt-8' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 1px #D0D3D9 ', color: '#667085' , fontWeight: '500' , paddingBlock: '13px', fontSize: '14px', paddingRight: '90px'  }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} style={{backgroundColor: 'white' , paddingBlock: '25px', width: '530px'}}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ width: '500px' , borderBottom: 'solid 1px #D0D3D9' ,  paddingBlock: '24px' , paddingLeft: '40px'}}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='flex mt-4 justify-between w-full'>
      <div
  className='flex items-center border border-gray-400 p-2 rounded rounded-lg cursor-pointer'
  onClick={() => gotoPage(0)}
  disabled={!canPreviousPage}
>
  <FaArrowLeft className='mr-2' color='border-gray-400' />
  Previous
</div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>

        <div
  className='flex items-center border border-gray-400 p-2 rounded rounded-lg cursor-pointer mr-5 pl-5'
  onClick={() => gotoPage(0)}
  disabled={!canPreviousPage}
>
  Next
  <FaArrowRight className='ml-2' color='black' />
</div>
    
        {/* <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
};

export default LenderTable;
