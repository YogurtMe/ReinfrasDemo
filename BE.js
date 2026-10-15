import axios from 'https://cdn.jsdelivr.net/npm/axios@1.7.7/+esm';

// SUBMIT BUTTON
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const foto = document.getElementById("foto");
    const kategori = document.getElementById("kategori").value;
    const keterangan = document.getElementById("keterangan").value;
    const demoURL = document.getElementById("demoURL").value;

    const formData = new FormData();

    formData.append("foto", foto.files[0]);
    formData.append("alamat", alamat);
    formData.append("koordinat", koordinat);
    formData.append("kategori", kategori);
    formData.append("keterangan", keterangan);
    formData.append("dox", dox);

    let url = "http://localhost:3000";

    axios.post(demoURL, formData)
    
    // Opsional: Reset form setelah submit
    this.reset();
});