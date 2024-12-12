import { useNavigate } from 'react-router-dom';
import "./FromDesign.css";
import "./DataShowDesign.css"

const Demo = () => {
  const navigate = useNavigate();
  const storedData = localStorage.getItem('AllData');
  const allData =  JSON.parse(storedData);

  return (
    <div>
      <h1>This Is A User Input A Data.</h1>
     
        <div>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Name</strong></td>
                <td>{allData.username}</td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td>{allData.email}</td>
              </tr>
              <tr>
                <td><strong>Date of Birth</strong></td>
                <td>{allData.date}</td>
              </tr>
              <tr>
                <td><strong>Phone Number</strong></td>
                <td>{allData.phoneNumber}</td>
              </tr>
              <tr>
                <td><strong>Selected Option</strong></td>
                <td>{allData.selectedValue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};

export default Demo;
