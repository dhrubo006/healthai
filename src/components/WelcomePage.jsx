import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Sidebar from "./Sidebar"; // Ensure this is pointing to your custom Sidebar component
import UploadFormSidebar from "./UploadForm";
import LineChatComponent from "./LineChart";
import BarChatComponent from "./BarChart";
import SimpleTable from "./SimpleTable";
import TaskTableComponent from "./TaskTable";
import "./loginSignupPage.css";

const WelcomePage = () => {


  return (
    <MDBContainer className="hide-scrollbar" >
      <div style={{ overflowY: 'auto', maxHeight: '100vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <MDBRow className="flex">
          <MDBCol sm="2" className="p-0">
            <Sidebar />
          </MDBCol>
          <MDBCol md="10" className="p-0">
            <MDBRow>
              <MDBCol md="6" className="p-2">
                <LineChatComponent />
              </MDBCol>
              <MDBCol md="6" className="p-2">
                <BarChatComponent />
              </MDBCol>
            </MDBRow>
            <MDBRow className="align-items-center justify-content-center">
              <MDBCol md="6" className="p-2 d-flex justify-content-center">
                <UploadFormSidebar />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="p-2">
                <SimpleTable />
              </MDBCol>
              <MDBCol md="6" className="p-2">
                <TaskTableComponent />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default WelcomePage;
