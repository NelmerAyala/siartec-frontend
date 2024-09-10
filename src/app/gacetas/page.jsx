"use client";

import "../styles/gacetas.scss";

import * as React from "react";

// others

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//modal
import Modal from "@mui/material/Modal";

//table
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// CODES

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "75vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//table
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Minerales no Metalicos del estado Carabobo", "ver"),
  createData("Decreto #568", "ver"),
  createData("Decreto #567", "ver"),
  createData("Ley de Ramos Tributarios", "ver"),
  createData("Ley de Reforma de la Ley de Hacienda Publica", "ver"),
  createData("Incremento del valor del ITE", "ver"),
  createData("Ley de Reforma Parcial de la Ley de Hacienda", "ver"),
  createData("Ley de Reforma Parcial de la Ley de Timbre Fiscal", "ver"),
  createData("Gaceta SIARTEC", "ver"),
  createData("Ley de Timbre Fiscal. NOV-2018", "ver"),
  createData("Ley Importe Tributario", "ver"),
  createData("Ley de Timbre Fiscal. MAR-2019", "ver"),
  createData("Ley de Hacienda Carabobo", "ver"),
  createData("Ley de Minerales No Metalicos", "ver"),
  createData("Reforma de la Ley de Timbre Fiscal", "ver"),
  createData("Gaceta 6998", "ver"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function GacetasPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {/*-----------------timbres Fiscales-----------------*/}
      <div className="container2">
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid className="gacetas texto" item xs={10}>
              <h2 className="text">Gacetas</h2>
              <p>
                <b>Pulse algún elemento para ver gaceta</b>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
              </p>
            </Grid>

            <Grid className="gacetas" item xs={10}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 500 }}
                  aria-label="custom pagination table"
                >
                  <TableBody>
                    {(rowsPerPage > 0
                      ? rows.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : rows
                    ).map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                          <a className="verMas" href="#1" onClick={handleOpen}>
                            {row.calories}
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        slotProps={{
                          select: {
                            inputProps: {
                              "aria-label": "Elem. por página",
                            },
                            native: true,
                          },
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <embed
              type="application/pdf"
              height="100%"
              width="100%"
              src="pdfs/gaceta1.pdf"
            />
          </Box>
        </Modal>
      </div>

      {``}
    </>
  );
}

// "use client";

// import "../styles/gacetas.scss";

// import * as React from "react";

// // others

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80vw",
//   height: "75vh",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function GacetasPage() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       {/*-----------------timbres Fiscales-----------------*/}
//       <div className="container2">
//         {/* /*div */}
//         <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
//           <Grid className="grid" container spacing={5}>
//             <Grid className="gacetas texto" item xs={10}>
//               <h2 className="text">Gacetas</h2>
//               <p>
//                 <b>Pulse algún elemento para ver gaceta</b>
//                 <br />
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
//                 dolor odit vel, odio doloremque praesentium facere id harum,
//                 porro blanditiis, libero neque ipsum saepe rerum quas autem
//                 accusamus voluptatem veniam minus sunt molestias cumque numquam
//               </p>
//             </Grid>

//             <Grid className="gacetas" item xs={3}>
//               <h2>Decreto #1</h2>
//               <a href="#1" onClick={handleOpen}>
//                 <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
//               </a>
//             </Grid>

//             <Grid className="gacetas" item xs={3}>
//               <h2>Decreto #2</h2>
//               <a href="#2" onClick={handleOpen}>
//                 <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
//               </a>
//             </Grid>

//             <Grid className="gacetas" item xs={3}>
//               <h2>Decreto #3</h2>
//               <a href="#3" onClick={handleOpen}>
//                 <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
//               </a>
//             </Grid>

//             <Grid className="gacetas" item xs={3}>
//               <h2>Decreto #4</h2>
//               <a href="#4" onClick={handleOpen}>
//                 <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
//               </a>
//             </Grid>
//           </Grid>
//         </Box>
//       </div>

//       <div>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <embed
//               type="application/pdf"
//               height="100%"
//               width="100%"
//               src="pdfs/gaceta1.pdf"
//             />
//           </Box>
//         </Modal>
//       </div>

//       {``}
//     </>
//   );
// }
