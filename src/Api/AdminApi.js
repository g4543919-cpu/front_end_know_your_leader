import api from "./axios"

export const createCandidate = (candidateDto)=>{
    const respons  =  api.post("/admin/Candidate",candidateDto);
}