/** @format */

import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const Details = () => {
  const [search, setSearch] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },

    {
      name: "Sex",
      selector: (row) => row.sex,
    },

    {
      name: "Mobile Num",
      selector: (row) => row.mobilenum,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
    },
    {
      name: "Govt.id",
      selector: (row) => row.govtid,
    },
    {
      name: "Guardian Num",
      selector: (row) => row.guardiannum,
    },
  ];

  const data = [
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
    {
      name: "sk",
      age: "24",
      sex: "male",
      mobilenum: "919874563210",
      nationality: "indian",
      govtid: "Adhar card",
      guardiannum: " 919632587410",
    },
  ];

  useEffect(() => {
    console.log(search);
    if (search) {
      let filterddata = data.filter((mapping) => {
        return (
          String(mapping?.name).toLowerCase().includes(search) ||
          String(mapping?.nationality)
            .toLowerCase()
            .includes(search) ||
          String(mapping?.govtid).toLowerCase().includes(search)
        );
      });
      setfilterdata(filterddata);
    } else {
      setfilterdata(data);
    }
  }, [search]);

  useEffect(() => {}, []);
  return (
    <>
      <DataTable
        title="Details"
        columns={columns}
        data={filterdata}
        pagination
        fixedHeader
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search here"
            className="w-25 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </>
  );
};
export default Details;
