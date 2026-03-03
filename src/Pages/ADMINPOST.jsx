import React, { useState } from 'react'
import { createCandidate } from '../Api/AdminApi';
import { Button } from '../components/ui/button';

export const ADMINPOST = () => {

    const [Name, setName] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setgender] = useState("");
    const [biography, setBiography] = useState("");
    const [party, setparty] = useState("");
    const [url, seturl] = useState("");

    const [ContituncyName, setContituncyName] = useState("");
    const [district, setdistrict] = useState("");
    const [state, setstate] = useState("");

    const [year, setyear] = useState("");
    const [electionType, setelectionType] = useState("");

    const [declared_assets, setdeclared_assets] = useState("");
    const [declared_liabilities, setdeclared_liabilities] = useState("");

    const [votesrecived, setvotesreceived] = useState("");
    const [resultStatus, SetresultStatus] = useState("");
    
    const HandleCandidate =()=>{
        const CandidateDto ={
            name: Name,
            dob: dob,
            gender: gender,
            biography: biography,
            party: party,
            url: url
        }
        try{
        const res = createCandidate(CandidateDto);
        console.log(res);
        }catch(err){
            console.log(err);
        }
    }


   return (
  <div className=" flex flex-wrap justify-center items-center min-h-screen w-screen px-4 py-4 gap-4">

    {/* Candidate */}
    <div className='bg-gray-500 p-4 h-auto w-[320px] text-white rounded'>
      <h2 className="font-bold mb-2">Candidate</h2>

      <input className="input" placeholder="Name"
        onChange={(e)=>setName(e.target.value)} />

      <input className="input" type="date"
        onChange={(e)=>setdob(e.target.value)} />

      <input className="input" placeholder="Gender"
        onChange={(e)=>setgender(e.target.value)} />

      <input className="input" placeholder="Party"
        onChange={(e)=>setparty(e.target.value)} />

      <input className="input" placeholder="Image URL"
        onChange={(e)=>seturl(e.target.value)} />

      <textarea className="input" placeholder="Biography"
        onChange={(e)=>setBiography(e.target.value)} />
        <Button onClick ={()=>HandleCandidate()} >Submit</Button>
    </div>

    {/* Constituency */}
    <div className='bg-gray-500 p-4 h-auto w-[320px] text-white rounded'>
      <h2 className="font-bold mb-2">Constituency</h2>

      <input className="input" placeholder="Name"
        onChange={(e)=>setContituncyName(e.target.value)} />

      <input className="input" placeholder="District"
        onChange={(e)=>setdistrict(e.target.value)} />

      <input className="input" placeholder="State"
        onChange={(e)=>setstate(e.target.value)} />
    </div>

    {/* Election */}
    <div className='bg-gray-500 p-4 h-auto w-[320px] text-white rounded'>
      <h2 className="font-bold mb-2">Election</h2>

      <input className="input" type="number" placeholder="Year"
        onChange={(e)=>setyear(Number(e.target.value))} />

      <select className="input"
        onChange={(e)=>setelectionType(e.target.value)}>
        <option value="">Select Election Type</option>
        <option value="LOK_SABHA">LOK_SABHA</option>
        <option value="ASSEMBLY">ASSEMBLY</option>
      </select>
    </div>

    {/* Election Result */}
    <div className='bg-gray-500 p-4 h-auto w-[320px] text-white rounded'>
      <h2 className="font-bold mb-2">Election Result</h2>

      <input className="input" type="number" placeholder="Candidate ID"
        onChange={(e)=>setcandidateId(Number(e.target.value))} />

      <input className="input" type="number" placeholder="Constituency ID"
        onChange={(e)=>setContituncyId(Number(e.target.value))} />

      <input className="input" type="number" placeholder="Election ID"
        onChange={(e)=>setelectionId(Number(e.target.value))} />

      <input className="input" type="number" placeholder="Votes Received"
        onChange={(e)=>setvotesreceived(Number(e.target.value))} />

      <select className="input"
        onChange={(e)=>SetresultStatus(e.target.value)}>
        <option value="">Select Result</option>
        <option value="WON">WON</option>
        <option value="LOST">LOST</option>
      </select>
    </div>

    {/* Assets */}
    <div className='bg-gray-500 p-4 h-auto w-[320px] text-white rounded'>
      <h2 className="font-bold mb-2">Assets</h2>

      <input className="input" type="number" placeholder="Declared Assets"
        onChange={(e)=>setdeclared_assets(e.target.value)} />

      <input className="input" type="number" placeholder="Declared Liabilities"
        onChange={(e)=>setdeclared_liabilities(e.target.value)} />
    </div>

    {/* Criminal Case */}
    <div className='bg-gray-500 p-4 h-auto w-[320px] text-white rounded'>
      <h2 className="font-bold mb-2">Criminal Case</h2>

      <input className="input" placeholder="Case Description"
        onChange={(e)=>setcase_description(e.target.value)} />

      <select className="input"
        onChange={(e)=>setSecurityLevel(e.target.value)}>
        <option value="">Select Severity</option>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>
    </div>

  </div>
)
}