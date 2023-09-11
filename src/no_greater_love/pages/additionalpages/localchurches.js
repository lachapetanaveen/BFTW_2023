import React, { Component } from 'react';
import NGLVHeader from '../../components/header';

const LocalChurches = () => {
    return ( 
        <div>
          <NGLVHeader />
            {/* <header>
                    <h2>Local Churches</h2>
                </header> */}
                <section id="intro" class="content-section">
                <div className='container-fluid content'>
                <div className="table-box table-responsive">

<table className="table">

  <thead className="thead-light">
    <tr className='th-bg'>
      <th style={{fontWeight:700,}}>No.</th>
      <th style={{ fontWeight: 700, textAlign: 'center' }}>Church Name </th>
      <th style={{ fontWeight: 700, textAlign: 'center' }}>District</th>
      <th style={{ fontWeight: 700, textAlign: 'center' }}>Country</th>
      <th style={{ fontWeight: 700, textAlign: 'center' }}>Created</th>
     
     
    </tr>

  </thead>
  <tbody>

    
       
          <tr>
<td>1</td>
            <td style={{ textAlign: 'center' }}>Hosanna Ministries</td>
            <td style={{ textAlign: 'center' }}>Hyderabad</td>
            <td style={{ textAlign: 'center' }}>Kenya</td>
            <td style={{ textAlign: 'center' }}>20-12-1990</td>
           
          </tr>
          <tr>
          <td>2</td>
<td style={{ textAlign: 'center' }}>Kalvari Temple</td>
<td style={{ textAlign: 'center' }}>Hyderabad</td>
<td style={{ textAlign: 'center' }}>Kenya</td>
<td style={{ textAlign: 'center' }}>20-12-1982</td>

</tr>
<tr>
<td>3</td>
<td style={{ textAlign: 'center' }}>Carmel Church</td>
<td style={{ textAlign: 'center' }}>Hyderabad</td>
<td style={{ textAlign: 'center' }}>Kenya</td>
<td style={{ textAlign: 'center' }}>20-12-2002</td>

</tr>
<tr>
<td>4</td>
<td style={{ textAlign: 'center' }}>Kula Matha Rahita Kreesthu Seva Sramam</td>
<td style={{ textAlign: 'center' }}>Vijayawada</td>
<td style={{ textAlign: 'center' }}>Kenya</td>
<td style={{ textAlign: 'center' }}>20-12-1990</td>

</tr>
  </tbody>
</table>

</div>
                </div>
                </section>
       
        </div>
        
     );
}
 
export default LocalChurches;