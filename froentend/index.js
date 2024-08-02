function uploadFile(){
    document.getElementById('preview').style.visibility = "hidden";
    let file = document.getElementById('resume').files[0];
    const formData = new FormData();
    formData.append('file', file);
    
 
    fetch('http://localhost:8000/resumeParse',{
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('File upload failed');
        }
      })
      .then(data => {
        // console.log(data)
        document.getElementById('preview').style.visibility = "visible";
        document.getElementById('contactInfo').innerHTML=data.ContactInformation
        document.getElementById('summary').innerHTML=data.Summary
        document.getElementById('education').innerHTML=data.Education
        document.getElementById('workHistory').innerHTML=data.WorkHistory
        document.getElementById('skills').innerHTML=data.Skills
        document.getElementById('contactInformation').innerHTML=data.Certifications
        
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
}