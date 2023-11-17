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
        setproduct(productData);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };

    getProducts();
  }, []);

  const handleItemClick = (productId, newStatus) => {
    try {
      // Update the status in Firebase
      dataBase
        .collection("products")
        .doc(productId)
        .update({
          status: newStatus,
        })
        .then(() => {
          console.log("Status updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating status: ", error);
        });

      // Close the modal or perform any other actions
      // Implement this logic based on your modal implementation
    } catch (error) {
      console.log("Error updating: ", error);
    }
    updateStatus(productId, newStatus);

    // Close the modal or perform any other actions
  };

  return (
    <div className="overflow-auto">
      <table className="w-full table-auto bg-white border border-gray-200 relative">
        <thead>
          <tr>
            <th className=" text-start pl-2">S/N</th>
            <th className=" text-start">Tracking Number</th>
            <th className=" text-start">Shipping Date</th>
            <th className=" text-start">Delievery Date</th>
            <th className=" text-start">Error Date</th>
            <th className=" text-start">Status</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id || index} className="w-[80%] p-52">
              <td className="text-start pt-2 pb-2 pl-2">{index}</td>
              <td className="text-start pt-2 pb-2">{item.id.toUpperCase()}</td>
              <td>{item.cargo_details.delivery_date}</td>
              <td>{item.cargo_details.delivery_method}</td>
              <td>
                {item.cargo_details.shipping_date.toDate().toDateString()}
              </td>
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
                  <DropModel
                    productId={item.id}
                    onItemClick={handleItemClick}
                  />
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

function DropModel({ productId, currentStatus, onClose, onItemClick }) {
  const handleItemClick = (newStatus) => {
    onItemClick(productId, newStatus);
  };

  return (
    <div className="flex flex-col dropDown shadow-sm">
      <div className="w-full flex justify-end p-1">
        <button onClick={() => setOpenProfile((prev) => !prev)}>
          <FaTimes color="black" />
        </button>
      </div>
      <ul className="flex flex-col gap-2 text-sm">
        <li className=" text-[#E11515]">
          <button onClick={() => handleItemClick("Delayed")}>Delayed</button>
        </li>
        <li className=" text-[#ED7D1A]">
          {" "}
          <button onClick={() => handleItemClick("In Transit")}>
            In Transit
          </button>
        </li>
        <li className=" text-[#11ED34]">
          {" "}
          <button onClick={() => handleItemClick("Delivered")}>
            Delivered
          </button>
        </li>
      </ul>
    </div>
  );
}
