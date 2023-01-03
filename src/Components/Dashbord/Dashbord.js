import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import useRevenue from "../Hooks/useRevenue";

const Dashbord = () => {

    const [revenus,setRevenues] =useRevenue();
  
     console.log("The revenus is :",revenus);

  return (
    <div className="dashbord-section">
      <Row xs={1} md={2} className="g-4">

         <Col> 
        
        <LineChart
          width={700}
          height={500}
          data={revenus}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" strokeWidth={2} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>

         
         </Col>

      </Row>
    </div>
  );
};

export default Dashbord;
