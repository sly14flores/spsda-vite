import { useState } from 'react'; // MUI

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import TablePagination from '@mui/material/TablePagination'; // MUI ICON COMPONENTS

import Add from '@mui/icons-material/Add';
import Search from '@mui/icons-material/Search'; // CUSTOM COMPONENTS

import { H6 } from '@/components/typography';
import Scrollbar from '@/components/scrollbar';
import FlexBox from '@/components/flexbox/FlexBox';
import { TableDataNotFound, TableToolbar } from '@/components/table';
import FileManagerTableRow from '../FileManagerTableRow';
import FileManagerTableHead from '../FileManagerTableHead'; // CUSTOM DEFINED HOOK

import useMuiTable from '@/hooks/useMuiTable'; // STYLED COMPONENTS

import { HeadingWrapper } from '../styles'; // CUSTOM DUMMY DATA

import { DATA } from '../data';
export default function FileManagerPageView() {
  const [files, setFiles] = useState([...DATA]);
  const {
    page,
    order,
    orderBy,
    selected,
    isSelected,
    rowsPerPage,
    handleSelectRow,
    handleChangePage,
    handleRequestSort,
    handleSelectAllRows,
    handleChangeRowsPerPage
  } = useMuiTable({
    defaultOrderBy: 'name'
  });

  const handleDeleteFile = id => {
    setFiles(state => state.filter(item => item.id !== id));
  };

  const handleAllFilesDelete = () => {
    setFiles(state => state.filter(item => !selected.includes(item.id)));
    handleSelectAllRows([])();
  };

  return <div className="pt-2 pb-4">
      <Card>
        {
        /* HEADING & SEARCH SECTION */
      }
        <HeadingWrapper>
          <H6 fontSize={18} fontWeight={600}>
            File Manager
          </H6>

          <FlexBox className="search" justifyContent="end" gap={2} flex={1}>
            <TextField placeholder="Search Folder" slotProps={{
            input: {
              startAdornment: <Search />
            }
          }} />
            <Button startIcon={<Add />}>New Folder</Button>
          </FlexBox>
        </HeadingWrapper>

        {
        /* TABLE ROW SELECTION HEADER  */
      }
        {selected.length > 0 && <TableToolbar selected={selected.length} handleDeleteRows={handleAllFilesDelete} />}

        {
        /* TABLE SECTION */
      }
        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 700
        }}>
            {
            /* TABLE HEAD SECTION */
          }
            <FileManagerTableHead order={order} orderBy={orderBy} numSelected={selected.length} rowCount={files.length} onRequestSort={handleRequestSort} onSelectAllRows={handleSelectAllRows(files.map(row => row.id))} />

            {
            /* TABLE BODY SECTION */
          }
            <TableBody>
              {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(file => <FileManagerTableRow key={file.id} data={file} handleSelectRow={handleSelectRow} isSelected={isSelected(file.id)} handleDeleteFile={handleDeleteFile} />)}

              {
              /* TABLE DATA NOT FOUND */
            }
              {files.length === 0 && <TableDataNotFound />}
            </TableBody>
          </Table>
        </Scrollbar>

        {
        /* PAGINATION SECTION */
      }
        <TablePagination page={page} component="div" rowsPerPage={rowsPerPage} count={files.length} onPageChange={handleChangePage} rowsPerPageOptions={[5, 10, 25]} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Card>
    </div>;
}