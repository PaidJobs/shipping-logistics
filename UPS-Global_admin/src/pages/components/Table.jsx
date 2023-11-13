import React from "react";
import { FaEllipsisV } from "react-icons/fa";

function TableComponent() {
  const userData = [
    {
      id: 1,
      shipment: "Ocean Freight",
      ShipDate: "11/10/2023",
      DDate: "Pending",
      ErrorDate: "12/12/2023",
      status: "In Transit",
    },
    {
        id: 2,
        shipment: "Ocean Freight",
        ShipDate: "11/10/2023",
        DDate: "Pending",
        ErrorDate: "12/12/2023",
        status: "Delivered",
      },
      {
        id: 3,
        shipment: "Ocean Freight",
        ShipDate: "11/10/2023",
        DDate: "Pending",
        ErrorDate: "12/12/2023",
        status: "Delayed",
      },
      {
        id: 4,
        shipment: "Ocean Freight",
        ShipDate: "11/10/2023",
        DDate: "Pending",
        ErrorDate: "12/12/2023",
        status: "Delivered",
      },
      {
        id: 5,
        shipment: "Ocean Freight",
        ShipDate: "11/10/2023",
        DDate: "Pending",
        ErrorDate: "12/12/2023",
        status: "Delivered",
      },
      {
        id: 6,
        shipment: "Ocean Freight",
        ShipDate: "11/10/2023",
        DDate: "Pending",
        ErrorDate: "12/12/2023",
        status: "Delivered",
      },
  ];

  return (
    <div className="">
      <table className="table table-auto w-full">
        <thead>
          <tr>
            <th className=" text-start pl-2">ID</th>
            <th className=" text-start">Shipment</th>
            <th className=" text-start">Shipping Date</th>
            <th className=" text-start">Delievery Date</th>
            <th className=" text-start">Error Date</th>
            <th className=" text-start">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {userData.map((item) => (
            <tr key={item.id} className="">
                <td className=" pt-2 pl-2 bg-white">{item.id}</td>
                <td className="pt-2 pb-2 bg-white">{item.shipment}</td>
                <td className="pt-2 ">{item.ShipDate}</td>
                <td className="pt-2 ">{item.DDate}</td>
                <td className="pt-2  ">{item.ErrorDate}</td>
                <td className={`text-start pt-2 ${item.status === "Delivered" ? "text-[#11ED34]" : item.status === "In Transit" ? "text-[#ED7D1A]" : item.status === "Delayed" ? "text-[#E11515]" : ""} `}>{item.status}</td>
                <td><FaEllipsisV size={20} color="grey"/></td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
