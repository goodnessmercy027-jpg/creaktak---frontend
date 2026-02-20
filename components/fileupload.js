import { useState } from 'react'
import { supabase } from '../supabase/client'

export default function FileUpload({ projectId }) {
  const [file, setFile] = useState(null)

  const handleUpload = async ()=>{
    if(!file) return
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const { data, error } = await supabase.storage.from('project_files').upload(fileName, file)
    if(data) {
      await supabase.from('files').insert([{ project_id: projectId, uploaded_by: supabase.auth.user()?.id, bucket:'project_files', file_url:data.path, file_name:file.name }])
      alert('File uploaded')
    }
  }

  return (
    <div className="card">
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  )
    }
