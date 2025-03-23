import React, { useState } from "react";
import "./Appointment.css";
import { motion } from "framer-motion";
import DoctorInfo from "../Reusables/DoctorInfo";
import { Doctors } from "./Doctors";

function Appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleContact() {
    setIsModalOpen(true);
  }
  return (
    <div className="appointmentBoard">
      {Doctors.map((item, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{
            width: 400,
            height: 300,
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <DoctorInfo
            source={item.image}
            name={item.details.name}
            age={item.details.age}
            hospital={item.details.Hostipital}
            speciality={item.details.Specialist}
            oncontact={handleContact}
          />
        </motion.div>
      ))}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
          <span className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointment;
