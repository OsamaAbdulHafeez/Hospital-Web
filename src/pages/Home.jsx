import React from 'react';
import Card from '../components/Card';
import { FaUser } from 'react-icons/fa';
import { LiaHospitalSolid } from "react-icons/lia";
import { FaAmbulance } from "react-icons/fa";
import { CgEditBlackPoint } from "react-icons/cg";


const Home = () => {

  const dashboardCard = [
    {
      title: "Users",
      description: "Total registered users",
      value: "1,245",
      color: 'red',
      icon: <FaUser size={24} />
    },
    {
      title: "Hospitals",
      description: "Total Hospitals",
      value: "1,245",
      color: 'slate',
      icon: <LiaHospitalSolid size={24} />
    },
    {
      title: "Ambulance",
      description: "Total Ambulance",
      value: "1,245",
      color: 'slate',
      icon: <FaAmbulance size={24} />
    },
    {
      title: "Points",
      description: "Total Points",
      value: "1,245",
      color: 'orange',
      icon: <CgEditBlackPoint size={24} />
    },

  ]


  return (
    <div className="p-4 ">

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          dashboardCard.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                value={item.value}
                icon={item.icon}
                color={item.color}
              />
            )
          })
        }
        {/* <Card
        title="Users"
        description="Total registered users"
        value="1,245"
        icon={<FaUser size={24} />}
      /> */}
      </div>
    </div>
  );
};

export default Home;
