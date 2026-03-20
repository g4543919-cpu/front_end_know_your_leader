import React, { useState } from "react";
import {
  createCandidate,
  createElection,
  createElectionResult,
} from "../Api/AdminApi";
import { Button } from "../components/ui/button";


export const ADMINPOST = () => {

  /* Candidate  */

  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [biography, setBiography] = useState("");
  const [party, setparty] = useState("");
  const [url, seturl] = useState("");

  /* Constituency */

  const [ContituncyName, setContituncyName] = useState("");
  const [district, setdistrict] = useState("");
  const [state, setstate] = useState("");

  /*Election*/

  const [year, setyear] = useState("");
  const [electionType, setelectionType] = useState("");

  /* Election Result*/

  const [candidateId, setcandidateId] = useState("");
  // const [electionId, setelectionId] = useState("");
  const [constituencyId, setContituncyId] = useState("");

  const [votesrecived, setvotesreceived] = useState("");
  const [resultStatus, SetresultStatus] = useState("");

  /* Assets*/

  const [declared_assets, setdeclared_assets] = useState("");
  const [declared_liabilities, setdeclared_liabilities] = useState("");

  /*Criminal Case */

  const [case_description, setcase_description] = useState("");
  const [severityLevel, setSecurityLevel] = useState("");

  /*Candidate API -*/

  const HandleCandidate = async () => {

    const CandidateDto = {
      name: name,
      dob: dob,
      gender: gender,
      biography: biography,
      party: party,
      url: url,
    };

    try {
      const res = await createCandidate(CandidateDto);
      console.log("Candidate Created:", res);
    } catch (err) {
      console.log(err);
    }
  };

  /* ---------------- Election API ---------------- */

  const HandleElection = async () => {

    const ElectionDto = {
      year: year,
      electionType: electionType,
    };

    try {
      const res = await createElection(ElectionDto);
      console.log("Election Created:", res);
    } catch (err) {
      console.log(err);
    }
  };

  /* ---------------- Election Result API ---------------- */

  const HandleElectionResult = async () => {

    const ElectionResultDto = {

      candidateId: Number(candidateId),
      // electionId: Number(electionId),
      electionType: electionType,
      electionYear:year,
      constituencyId: Number(constituencyId),

      votes_received: Number(votesrecived),
      resultStatus: resultStatus,

      assets: [
        {
          declared_assets: Number(declared_assets),
          declared_liabilities: Number(declared_liabilities),
        },
      ],

      criminalCases: [
        {
          case_description: case_description,
          severityLevel: severityLevel,
        },
      ],
    };

    try {
      const res = await createElectionResult(ElectionResultDto);
      console.log("Election Result Posted:", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <>
    
    <div className="flex flex-col  bg-gray-100  items-center min-h-screen w-full px-2 py-4 gap-4">
    <div>
      <h1 className="text-center font-bold bg-gray-100 ">Admin DashBoard</h1>
      </div>
      
    
     <div className="flex gap-4 w-full justify-center">
      {/* Candidate */}

      <div className=" bg-white shadow-xl rounded-2xl p-4 h-[290px] w-[320px] text-black rounded">

        <h2 className="font-bold mb-2">Candidate</h2>

        <input className="input" placeholder="Name"
          onChange={(e) => setName(e.target.value)} />

        <input className="input" type="date"
          onChange={(e) => setdob(e.target.value)} />

        <input className="input" placeholder="Gender"
          onChange={(e) => setgender(e.target.value)} />

        <input className="input" placeholder="Party"
          onChange={(e) => setparty(e.target.value)} />

        <input className="input" placeholder="Image URL"
          onChange={(e) => seturl(e.target.value)} />

        <textarea className="input" placeholder="Biography"
          onChange={(e) => setBiography(e.target.value)} />

        <Button onClick={HandleCandidate}>
          Submit Candidate
        </Button>

      </div>

      {/* Election Result */}

      <div className="bg-white shadow-xl rounded-2xl p-4 h-auto w-[320px] ">

        <h2 className="font-bold mb-2">Election Result</h2>

        <input className="input" type="number" placeholder="Candidate ID"
          onChange={(e) => setcandidateId(e.target.value)} />

        {/* <input className="input" type="number" placeholder="Election ID"
          onChange={(e) => setelectionId(e.target.value)} /> */}
         <select className="input"
          onChange={(e) => setelectionType(e.target.value)}>

          <option value="">Select Election Type</option>
          <option value="LOK_SABHA">Lok_Sabha</option>
          <option value="ASSEMBLY"> Assembly</option>

        </select>

        <input className="input" type="number" placeholder="Constituency ID"
          onChange={(e) => setContituncyId(e.target.value)} />

        <input className="input" type="number" placeholder="Votes Received"
          onChange={(e) => setvotesreceived(e.target.value)} />

        <select className="input"
          onChange={(e) => SetresultStatus(e.target.value)}>

          <option value="">Select Result</option>
          <option value="WON">WON</option>
          <option value="LOST">LOST</option>

        </select>
        <h2 className="font-bold mb-2">Assets</h2>

        <input className="input" type="number" placeholder="Declared Assets"
          onChange={(e) => setdeclared_assets(e.target.value)} />

        <input className="input" type="number" placeholder="Declared Liabilities"
          onChange={(e) => setdeclared_liabilities(e.target.value)} />

           <h2 className="font-bold mb-2">Criminal Case</h2>

        <input className="input" placeholder="Case Description"
          onChange={(e) => setcase_description(e.target.value)} />

        <select className="input"
          onChange={(e) => setSecurityLevel(e.target.value)}>

          <option value="">Select Severity</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>

        </select>

        <Button onClick={HandleElectionResult}>
          Submit Result
        </Button>

      </div>
      </div>

      {/* Election */}

      <div className="bg-white shadow-xl rounded-2xl p-4 h-auto w-[320px]  rounded flex flex-col gap-2">

        <h2 className="font-bold mb-2">Election</h2>

        <input className="input" type="number" placeholder="Year"
          onChange={(e) => setyear(Number(e.target.value))} />

        <select className="input"
          onChange={(e) => setelectionType(e.target.value)}>

          <option value="">Select Election Type</option>
          <option value="LOK_SABHA">Lok_Sabha</option>
          <option value="ASSEMBLY"> Assembly</option>

        </select>

        <Button className="w-[150px]" onClick={HandleElection}>
          Submit Election
        </Button>

      </div>
    </div>
    </>
  );
};