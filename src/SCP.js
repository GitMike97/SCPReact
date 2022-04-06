import SCPj from './SCPJSON.json'

const scpj = SCPj.map(
  (SCPS) => {
    
    return(
      <div key={SCPS.item}>
        <h3>{SCPS.item}</h3>
        <h4><strong>Class:</strong> {SCPS.class}</h4>
        <p><strong>Secure Containment Procedure:</strong> {SCPS.containment}</p>
        <p><strong>Description:</strong> {SCPS.description}</p>
        <p><img src={SCPS.image} height="407px" width="399px"/></p>
        <br/><br/>
      </div>
    );
  }
);

function SCP()
{
  return(
    <div className='container bg-light text-light'>
      <br/>
      <div className='container'>
        <div className='bg-dark container'>
          <br/>
          <h1>SCP Foundation</h1>
          <h4>Secure.Contain.Protect.</h4>
          <br/>
        </div>
        <br/>
        <div className='bg-dark container'>
          {scpj}
          <br/>
        </div>
      </div>
      <br/>
    </div>
  )
}




export default SCP;