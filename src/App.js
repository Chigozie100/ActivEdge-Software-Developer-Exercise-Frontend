import Link from "react-dom";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { OverviewWrapper } from "./OverviewStyle";
import axios from "axios";
import { toast } from "react-toastify";



const App = ({result}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const columns = [
    { id: "Name", label: "Name", minWidth: 170 },
    { id: "CurrentPrice", label: "CurrentPrice", minWidth: 170 },
    { id: "CreatedDate", label: "Created Date", minWidth: 170 },
    {
      id: "LastUpdate",
      label: "Last Update",
      minWidth: 170,
      align: "right",
    }
  ];

 const getTransaction = async (e) => {
   try {
     const { status, data } = await axios.get(
      // PUT YOUR API HERE
       "http://localhost:8080/api/stocks/getStocks?pageNo=0&pageSize=10&sortBy=id",
       
     );
     console.log(data);
     
     if (status === 200) {
       return data.data.map((data) =>
         createData(
           data.name,
           data.price,
           data.company,
          
         )
       );
     }
   } catch (err) {
     toast(err.response.data.message);
     console.log(err);
   }
 };


  function createData(
    name,
    price,
    company,
    
  ) {
    return { name, price, company };
  }



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
   useEffect(() => {
     getTransaction().then((data) => {
       setRows(data);
     });
   }, [result]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <OverviewWrapper>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {rows && (
              <TableBody>
                {rows.map((row, rowIndex) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={rowIndex}
                    >
                      {columns.map((column, coLindex) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={coLindex} align={column.align}>
                            {/* {console.log(value)} */}
                            
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[1, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </OverviewWrapper>
  );
};

export default App;
