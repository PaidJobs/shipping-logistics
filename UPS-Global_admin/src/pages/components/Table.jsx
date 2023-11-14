import React, { useEffect, useState } from "react";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "../../config/firebase";

function TableComponent() {
  const [product, setproduct] = useState([]);
  const docRef = collection(dataBase, "products");

  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const docSnap = await getDocs(docRef);
        const productData = docSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(productData)
        setproduct(productData);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 relative">
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
        <tbody>
          {product.map((item, index) => (
            <tr key={index} className="w-[80%] p-52">
              <td className="text-start pt-2 pb-2 pl-2">{index}</td>
              <td className="text-start pt-2 pb-2">{item.cargo_details.package_type}</td>
              <td>{item.cargo_details.delivery_date}</td>
              <td>{item.cargo_details.delivery_method}</td>
              <td>{item.cargo_details.shipping_date.toDate().toLocaleString()}</td>
              <td
                className={`text-start pt-2 pb-2 ${
                  item.status === "Delivered"
                    ? "text-[#11ED34]"
                    : item.status === "In Transit"
                    ? "text-[#ED7D1A]"
                    : item.status === "Delayed"
                    ? "text-[#E11515]"
                    : ""
                } `}
              >
                {item.status}
              </td>
              <td>
                {openProfile && (
                  <div className="flex flex-col dropDown shadow-sm">
                    <div className="w-full flex justify-end p-1">
                      <button onClick={() => setOpenProfile((prev) => !prev)}>
                        <FaTimes color="black"/>
                      </button>
                    </div>
                    <ul className="flex flex-col gap-2 text-sm">
                      <li className=" text-[#E11515]" onClick={console.log("delayed")}>Delayed</li>
                      <li className=" text-[#ED7D1A]">In Transit</li>
                      <li className=" text-[#11ED34]">Delivered</li>
                    </ul>
                  </div>
                )}
                <button onClick={() => setOpenProfile((prev) => !prev)}>
                  <FaEllipsisV size={20} color="grey" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
