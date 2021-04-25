import React, { useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import data from "../public/SINAPI.json";

const Table = () => {
  return (
    <div
      id="myGrid"
      style={{ height: "100%", width: "100%" }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        defaultColDef={{
          flex: 1,
          floatingFilter: true,
          sortable: true,
          filter: "agTextColumnFilter",
        }}
        rowData={data["api"]}
      >
        <AgGridColumn headerName="Código" field="codigo" maxWidth={100} />
        <AgGridColumn
          headerName="Descrição"
          field="descricao"
          resizable={true}
        />
        <AgGridColumn
          headerName="Origem do preço"
          field="origem_do_preco"
          maxWidth={160}
        />
        <AgGridColumn headerName="Unidade" field="unidade" maxWidth={110} />
        <AgGridColumn
          headerName="Preço (R$)"
          field="preco"
          filter="agNumberColumnFilter"
          maxWidth={130}
        />
      </AgGridReact>
    </div>
  );
};

export default Table;
